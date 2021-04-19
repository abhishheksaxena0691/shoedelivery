const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../module/dbConnect');
const config = require('../module/secret');
const sendSMS = require('../module/smsSend');
var multer  = require('multer');
var brochureToUserIdMap = {};
var fs = require('fs');
const PDF2Pic = require("pdf2pic");

const pdfParse = require("pdf-parse");
router.post('/api/login', (req, res, next) => {
    if(!req.body.usrName || !req.body.yrPass) {
        res.status(400).jsonp('Incomplete information');
    } else {
        console.log(req.body);
        db.getDB().collection('userInfo').findOne({mobileNo: req.body.usrName}).then((doc) => {
            if (doc) {
                if(bcrypt.compareSync(req.body.yrPass, doc.password)) {
                    let token = jwt.sign({uId: doc._id, mobile: doc.mobileNo, usrName: doc.fstName, userType: doc.userType}, config.secret);
                    res.status(202).jsonp({uName: doc.fstName, userType: doc.userType,token: token, companyName: doc.companyName, domainNme: doc.domain});
                } else {
                    res.status(401).jsonp('Authentication failed!');
                }
            } else {
                res.status(401).jsonp('Authentication failed!');
            }
        })
        .catch(err => {
            res.status(410).jsonp(err);
            next(err);
        });
    }
});



router.post('/api/register', (req, res, next) => {
    if(!req.body) {
        res.status(400).jsonp('Incomplete information');
    } else {
        let BCRYPT_SALT_ROUNDS = 12;
        // const otp = Math.floor((Math.random() * (9999 - 1000)) + 1000);
        const otp = 111;
        let usrData = {
            fstName: req.body.fstName,
            lstName: req.body.lstName,
            mobileNo: req.body.mobileNo,
            email: req.body.email,
            userType: req.body.userType,   //1 for dealer 2 for retailer
            companyName: req.body.companyName,
            domain: req.body.domain,
            password: bcrypt.hashSync(req.body.yrPass, BCRYPT_SALT_ROUNDS),
            otp: otp.toString(),
            createdOn: new Date().toString(),
            updatedOn: new Date().toString(),
            status: false

        }

        const collection = db.getDB().collection('userInfo');

        collection.countDocuments({mobileNo: req.body.mobileNo}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                if(doc == 0) {
                    collection.insertOne(usrData, (err, result) => {
                        if(err) {
                            res.status(410).jsonp(err);
                            next(err);
                        } else {
                           // sendSMS("Please use the code - "+otp+" to verify your phone for Shoe Retailer", req.body.mobileNo);
                            res.status(201).jsonp('Your are register successfully!');
                        }
                    })
                } else {
                    res.status(410).jsonp("User with the phone number already exists. Try different title!");
                }
            }
        });
    }
});


router.post('/api/verify', (req, res, next) => {
    if(!req.body) {
        res.status(400).jsonp('Incomplete information');
    } else {
        
        let usrInfo = db.getDB().collection('userInfo');

        let usrData = {
            otp: null,
            updatedOn: new Date().toString(),
            status: true
        }

        usrInfo.findOneAndUpdate({mobileNo: req.body.regMobile, otp: req.body.otp}, {$set: usrData}, {returnOriginal: false}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                if(doc.value)
                    res.status(201).jsonp('Your account verified successfully!');
                else
                    res.status(410).jsonp("Invalid user. Please check again!");
            }
            
        });
    }
});

router.post('/api/verifyMobileNumber',(req, res, next) => {
    if(!req.body) {
        res.status(400).jsonp('Incomplete information');
    } else {
        db.getDB().collection('userInfo').findOne({mobileNo: req.body.regMobile, userType: 2}).then((doc) => {
            console.log(doc);
                res.status(200).jsonp(doc);
                    })
        .catch(err => {
            res.status(410).jsonp(err);
            next(err);
        });
    } 
 });
 let brochureStorage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/uploads");
  },
  filename: function(req, file, callback) {
    const filename = file.originalname;
  console.log(filename);
    callback(null, filename);
  }
});
let brochureUpload = multer({
  storage: brochureStorage
}).single("file");

router.post("/bot/upload-file", function(req, res) {
  localAuthenticate(req, res, function(
    isValid,
    message,
    user
  ) {
    
    if (isValid) {
      brochureUpload(req, res, function(err) {
        if (err) {
          
          let responseObj = new ResponseObj(
            400,
            "Failed to upload brochure!", 
            null
          );

          res.status(responseObj.status).json(responseObj);
          return;
        }

        var brochure = req.file.path;
        
        if (brochure.length > 7 && brochure.indexOf("public") === 0) {
          brochure = brochure.substring(7);
        }

        
        const truncatedFileName = req.file.originalname.substring(
          0,
          req.file.originalname.length - 4
        );
       
        let userId = truncatedFileName.split('_')[1];

        const brochureObj ={
          name: req.file.originalname,
          originalFilename: req.file.originalname,
          originalFilePath: brochure,
          path: brochure,
          userId: userId,
          username: user.fullname,
          coupon: '1234',
          amount: 0
        };

        // Brochure.findByBrochureName(brochureObj.name, function(
        //   err,
        //   brochureObjFromDB
        // ) {
          db.getDB().collection('brochures').findOne({name: req.file.originalname}).then((err, brochureObjFromDB) => {
         
          if (err) {
          
          }

          if (brochureObjFromDB) {
           

            parsePDFForReports(brochureObjFromDB, function(
              errBr,
              updatedBrochureObj
            ) {
              if (errBr || !updatedBrochureObj) {
              

                let responseObj = new ResponseObj(
                  500,
                  "parsePDFForReports failed: " + errBr,
                  null
                );
                res.status(responseObj.status).json(responseObj);
                return;
              }

           
            });
          } else {

            db.getDB().collection('brochures').insertOne(brochureObj, function(
              err,
              result
            ) {
              if (err) {
          
               
                res.status(500).jsonp("responseObj");
                return;
              }

                      parsePDFForReports(brochureObj, function(
                        errBr,
                        updatedBrochureObj
                      ) {
                        if (errBr) {
                        

                        
                          res.status(500).jsonp("responseObj");
                          return;
                        }   else {
                          const pdf2pic = new PDF2Pic({
                            density: 100,
                            savename: req.file.originalname,
                            savedir: "./public/pdfBills/images",
                            format: "jpg",
                            size: "900x800"
                        });
            
                     
                        
                            
                        pdf2pic.convertBulk("./public/uploads/"+req.file.originalname, -1).then((resolve) => {
                          updatedBrochureObj.billDetails['billImg'] = [];
                          updatedBrochureObj.billDetails.billImg = resolve;
                                          db.getDB().collection('delivery').insertOne(updatedBrochureObj,function(
                                            err,
                                            result
                                          ) {
                                            if (err) {
                                              console.log(err);
                                            
                                              res.status(500).jsonp(responseObj);
                                              return;
                                            }
                                          else {
                                          
                                            res.status(200).json(updatedBrochureObj);
                                            return;
                                                  
                                          }
                                          });
                                });
                          
                        }
                      });
            });
          }
        });
      });
    } else {
      let responseObj = new ResponseObj(
        403,
        "You are not authorized to perform this action!!",
        null
      );
      res.status(responseObj.status).json(responseObj);
      return;
    }
  });
});


function parsePDFForReports(brochure, cb) {
 console.log("brochure");
 console.log(brochure);


  fs.readFile("./public/uploads/"+brochure.originalFilename, (err, dataBuffer) => {
    console.log(dataBuffer);
            pdfParse(dataBuffer).then(function(data) {
              console.log("data");
              console.log(data);
              const splitText = data.text.split(/\r?\n/);
              let pdfData = {};
              pdfData.reports = [];
              let isParsingComplete = false;

              for (let itr = 0; itr < splitText.length; itr++) {
                let lineData = splitText[itr].trim();
                const dateFormat = /^(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])(\-)\d{4}$/;

                if (!pdfData.title && lineData.length > 0) {
                  pdfData.title = lineData;
                } else if (!pdfData.customer && lineData.indexOf("Customer:") >= 0) {
                  pdfData.customer = lineData
                    .substring(lineData.indexOf("Customer:") + "Customer:".length)
                    .trim();
                  continue;
                } else if (!pdfData.seller && lineData.indexOf("Seller:") >= 0) {
                  pdfData.seller = lineData
                    .substring(lineData.indexOf("Seller:") + "Seller:".length)
                    .trim();
                  itr++;
                  pdfData.subTitle = splitText[itr].trim();
                  continue;
                } else if (!pdfData.transaction && lineData.indexOf("Transaction") >= 0) {
                  pdfData.transaction = lineData
                    .substring(lineData.indexOf("Transaction") + "Transaction".length)
                    .trim();
                  continue;
                } else if (!pdfData.date && lineData.match(dateFormat)) {
                  pdfData.date = lineData;
                  itr++;
                  pdfData.time = splitText[itr].trim();
                  continue;
                  // 8377 is ascii code of rupee symbol
                } else if (
                  lineData.length > 0 &&
                  lineData[0] === String.fromCharCode(8377) &&
                  splitText[itr + 1] &&
                  splitText[itr + 1].indexOf(" X") > 0
                ) {
                  let amount = lineData.substring(1).trim();
                  //amount = amount.replace(/\,/g, "");
                  itr++;
                  lineData = splitText[itr].trim();
                  let description = lineData.substring(lineData.indexOf(" ") + 2).trim();
                  let qty = lineData.substring(0, lineData.indexOf(" ")).trim();
                  pdfData.reports.push({
                    description: description,
                    qty: qty,
                    amount: amount
                  });
                  continue;
                } else if (!pdfData.total && lineData.indexOf("Total:") >= 0) {
                  let total = lineData
                    .substring(lineData.indexOf("Total:") + "Total:".length + 1)
                    .trim();
                  //total = total.replace(/\,/g, "");
                  pdfData.total = total;
                  isParsingComplete = true;
                  continue;
                }
              }
              
              
              if (isParsingComplete) {
              
          const billImage  =  {

                  "billDetails": {
                      "filePath": brochure.originalFilename,
                      "reports": [],
                      "title": pdfData.title,
                      "customer": "",
                      "seller": "Administrator",
                      "subTitle": "03-13-2021",
                      "total":pdfData.total,
                      "date": new Date(),
                      "deportment": pdfData.title,
                      "user": "8130676870newtest",
                      "genDate": ""
                  },
                  "paidBy": "",
                  "usrNumber": brochure.userId,
                  "category": "dashboard",
                  "payStatus": false,
                  "userType": 2,
                  "retailerMobile": brochure.userId,
                  "createdTimeStamp": 1615648936219,
                  "responseStatus": 0
              }
              cb(null, billImage)
              
              
              }
            });
});
}

function localAuthenticate(req, res, cb) {
  
  
  if (typeof req.query.token === "undefined") {
   // return cb(false, "Unauthorized!", null);
   return cb(true, "Shoe Factory", {
                                    "image": "images/user.png",
                                    "role": "BOT",
                                    "isMobileVerified": true,
                                    "isEnabled": true,
                                    "isDeleted": false,
                                    "email": "bot@gmail.com",
                                    "mobile": "1111111111",
                                    "fullname": "Bot 1"})
  } else {
  return cb(false, "Shoe Factory", user);
  }
  // const token = req.query.token;

  // Token.findByToken(token, function(err, tokenFromDb) {
  //   if (err) {
  //     return cb(false, "Unauthorized", null);
  //   }
  //   if (!tokenFromDb) {
  //     return cb(false, "Unauthorized", null);
  //   }
  //   User.findByUserId(tokenFromDb.userId, false, function(
  //     err,
  //     user
  //   ) {
  //     if (err) {
  //       return cb(false, "Unauthorized", null);
  //     }
  //     if (!user) {
  //       return cb(false, "Unauthorized", null);
  //     }
  //     return cb(true, "Shoe Factory", user);
  //   });
  // });
}
module.exports = router;
