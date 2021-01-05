const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../module/dbConnect');
const config = require('../module/secret');
const sendSMS = require('../module/smsSend');


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
        const otp = Math.floor((Math.random() * (9999 - 1000)) + 1000);
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
                            sendSMS("Please use the code - "+otp+" to verify your phone for Shoe Retailer", req.body.mobileNo);
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

 router.post("/bot/upload-file", function(req, res) {
    localAuthenticate(req, res, function(
      isValid,
      message,
      user
    ) {
      if (isValid) {
        brochureUpload(req, res, function(err) {
          if (err) {
            logger.error(err);
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
  
          if (!brochureToUserIdMap[truncatedFileName]) {
            logger.error(
              "Brochure mapping not found for file: " + req.file.originalname
            );
  
            let responseObj = new ResponseObj(200, "Success", {
              data: "Brochure mapping not found!"
            });
            res.status(responseObj.status).json(responseObj);
            return;
          }
          let userId = brochureToUserIdMap[truncatedFileName];
  
          delete brochureToUserIdMap[truncatedFileName];
  
          const brochureObj = new Brochure.BrochureModel({
            name: req.file.originalname,
            originalFilename: req.file.originalname,
            originalFilePath: brochure,
            path: brochure,
            userId: userId,
            username: user.fullname,
            coupon: generateCouponCode(),
            amount: 0
          });
  
          Brochure.findByBrochureName(brochureObj.name, function(
            err,
            brochureObjFromDB
          ) {
            if (err) {
              logger.error(err);
              logger.error("Error finding brochure in DB");
            }
  
            if (brochureObjFromDB) {
              logger.debug(
                "Brochure already exists in DB: " + brochureObjFromDB.name
              );
  
              parsePDFForReports(brochureObjFromDB, function(
                errBr,
                updatedBrochureObj
              ) {
                if (errBr || !updatedBrochureObj) {
                  logger.error("parsePDFForReports failed: " + errBr);
  
                  let responseObj = new ResponseObj(
                    500,
                    "parsePDFForReports failed: " + errBr,
                    null
                  );
                  res.status(responseObj.status).json(responseObj);
                  return;
                }
  
                createPaymentLinkAndMerge(req, user, updatedBrochureObj, function(
                  errPdf,
                  mergedBrochure
                ) {
                  if (errPdf || !mergedBrochure) {
                    let responseObj = new ResponseObj(
                      500,
                      "createPaymentLinkAndMerge failed: " + errBr,
                      null
                    );
                    res.status(responseObj.status).json(responseObj);
                    return;
                  }
  
                  socket.brochureReady(
                    userId,
                    mergedBrochure.name,
                    mergedBrochure.path
                  );
                  let responseObj = new ResponseObj(200, "Success", null);
                  res.status(responseObj.status).json(responseObj);
                });
              });
            } else {
              Brochure.createBrochure(brochureObj, function(
                err,
                result
              ) {
                if (err) {
                  logger.error(err);
                  logger.error("Failed to create new Brochure!");
  
                  let responseObj = new ResponseObj(
                    500,
                    "Failed to create new Brochure!",
                    null
                  );
                  res.status(responseObj.status).json(responseObj);
                  return;
                }
  
                parsePDFForReports(brochureObj, function(
                  errBr,
                  updatedBrochureObj
                ) {
                  if (errBr || !updatedBrochureObj) {
                    logger.error("parsePDFForReports failed: " + errBr);
  
                    let responseObj = new ResponseObj(
                      500,
                      "parsePDFForReports failed: " + errBr,
                      null
                    );
                    res.status(responseObj.status).json(responseObj);
                    return;
                  }
  
                  createPaymentLinkAndMerge(
                    req,
                    user,
                    updatedBrochureObj,
                    function(errPdf, mergedBrochure) {
                      if (errPdf || !mergedBrochure) {
                        let responseObj = new ResponseObj(
                          500,
                          "createPaymentLinkAndMerge failed: " + errBr,
                          null
                        );
                        res.status(responseObj.status).json(responseObj);
                        return;
                      }
  
                      socket.brochureReady(
                        userId,
                        mergedBrochure.name,
                        mergedBrochure.path
                      );
                      let responseObj = new ResponseObj(200, "Success", null);
                      res.status(responseObj.status).json(responseObj);
                    }
                  );
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
 function createPaymentLinkAndMerge(
    req,
    user,
    brochure,
    cb
  ) {
    let rootPath = path.resolve(".") + "/public/";
  
    let html = config.paymentHtml2;
    let url = fullUrl(req);
    url = new URL.URL(url).origin;
    url += "/payment?id=" + brochure.id;
  
    const reports = brochure.reports;
    let reportsHtml = "";
  
    for (let itr = 0; itr < reports.length; itr++) {
      const desc = reports[itr].description;
      const qty = reports[itr].qty;
      const amount = reports[itr].amount;
      reportsHtml += "<tr>";
      reportsHtml +=
        '<td colspan="2">' +
        qty +
        ' <span class="weight-600 pad-b">X</span> ' +
        desc +
        "</td>";
      reportsHtml += '<td class="pad-b"></td>';
      reportsHtml += '<td class="txt-right pad-b">₹ ' + amount + "</td>";
      reportsHtml += "</tr>";
    }
  
    html = html.replace("replaceMeTitle", brochure.brochureParsedTitle);
    html = html.replace("replaceMeSubTitle", brochure.brochureParsedSubTitle);
    html = html.replace("replaceMeCustomer", brochure.brochureParsedCustomer);
    html = html.replace("replaceMeSeller", brochure.brochureParsedSeller);
    html = html.replace(
      "replaceMeTransaction",
      brochure.brochureParsedTransaction
    );
    html = html.replace("replaceMeDate", brochure.brochureParsedDate);
    html = html.replace("replaceMeTime", brochure.brochureParsedTime);
    html = html.replace("replaceMeRows", reportsHtml);
    html = html.replace("replaceMeTotal", brochure.brochureParsedTotal);
    html = html.replace("replaceMeTotal", brochure.brochureParsedTotal);
    html = html.replace(
      "replaceMePaymentLink",
      '<a href="' + url + '" class="btn" target="_blank">Pay Now</a>'
    );
    html = html.replace("replaceMeReceipt", "");
    //html = html.replace("amount", "Rs. " + brochure.amount + "/-");
  
    //logger.debug(html);
    let brochureName = brochure.name;
    if (brochureName.indexOf(".") > 0) {
      brochureName = brochureName.substring(0, brochureName.lastIndexOf("."));
    }
  
    //const paymentLinkFilePath = "uploads/" + brochureName + "_paymentlink.pdf";
    const finalMergedFilename = brochureName + "_P.pdf";
    const finalMergedFilePath = "uploads/" + finalMergedFilename;
    let options = {format:"Letter"}
  
    try {
  
    html2pdf
      .create(html, options)
      .toFile(rootPath + finalMergedFilePath, function(err, result) {
        if (err) {
          logger.error("PDF Generation Error:" + err);
          cb(err, null);
          return;
        }
  
        logger.silly("Brochure Payment Link Filename: " + result.filename);
  
        brochure.path = finalMergedFilePath;
        brochure.name = finalMergedFilename;
  
        Brochure.updateBrochureById(brochure._id, brochure, function(
          err,
          result
        ) {
          cb(err, brochure);
        });
      });
          
    } catch(e) {
      cb(e, null);
    }
  }
module.exports = router;
