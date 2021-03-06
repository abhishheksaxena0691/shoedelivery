const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');
var multer  = require('multer');
const PDF2Pic = require("pdf2pic");
const { ObjectID } = require('bson');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/pdfBills/');
     },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null , file.originalname);
    }
});

const upload = multer({storage: storage}).single('bill');

router.post('/api/profile/bill', midWare.checkToken, (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.status(410).jsonp(error);
            next(error);
        } else {

            let extension = req.file.originalname.split('.').pop();
            let originalName = req.file.originalname.split('.').slice(0, -1).join('.');
            let tempN = originalName;
            console.log("originalName", originalName);
            if (extension == 'pdf') {
               
                extension = 'jpg';
                const fileName = originalName+'.'+extension;
                    console.log(fileName);
                const pdf2pic = new PDF2Pic({
                    density: 100,
                    savename: originalName,
                    savedir: "./public/pdfBills/",
                    format: "jpg",
                    size: "900x800"
                });
                pdf2pic.convert("./public/pdfBills/"+req.file.originalname).then((resolve) => {
                    console.log("hellllllllllllllllllllo");
                    res.status(201).jsonp(tempN+'_1'+'.jpg');
                })
            } else {
                const fileName = originalName+'.'+extension;
                res.status(201).jsonp(fileName);
            };
        }
    });
});


router.post('/api/bill-info', midWare.checkToken, (req,res,next) => {
    if(!req.body) {
        res.status(400).jsonp('Incomplete information');
    } else {
        let billInfo =  {
            user: req.decoded.mobile,
            usrName: req.decoded.usrName,
            title: req.body.title,
            date: new Date(req.body.date),
            total: req.body.amount,
            deportment: req.body.factory,
            billImg: req.body.fileName
        };
        db.getDB().collection('uploadBill').insertOne(billInfo, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                res.status(200).jsonp("Bill uploaded successfully!");
            }
        });
    }
});

router.get('/api/bill-info', midWare.checkToken, (req,res,next) => {
    const collection = db.getDB().collection('uploadBill');
    collection.find({user: req.decoded.mobile}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.length == 0) {
                res.status(404).jsonp("No bill found!");
            } else {
                res.status(200).jsonp(doc);
            }
        }
    });
});

router.get('/api/profile', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('userInfo').findOne({_id: db.getPrimaryKey(req.decoded.uId)}).then((doc) => {
        if(doc)
            res.status(200).jsonp(doc);
        else
            res.status(404).jsonp('Profile not found!');
    })
    .catch(err => {
        res.status(410).jsonp(err);
        next(err);
    });
});


router.put('/api/profile', midWare.checkToken, (req, res, next) => {
    if(!req.body.email) {
        res.status(400).jsonp('Incomplete information');
    } else {
        let usrInfo = db.getDB().collection('userInfo');

        let usrData = {
            $set: {
                fstName: req.body.fstName,
                lstName: req.body.lstName,
                email: req.body.email,
                address: req.body.address
            }
        };

        usrInfo.findOneAndUpdate({_id: db.getPrimaryKey(req.decoded.uId)}, usrData, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                res.status(201).jsonp('Your profile information updated successfully!');
            }
        });
    }
});

router.put('/api/profile/password', midWare.checkToken, (req, res, next) => {
    if(!req.body.oldPass || !req.body.newPass) {
        res.status(400).jsonp('Incomplete information');
    } else {
        let usrInfo = db.getDB().collection('userInfo');

        let BCRYPT_SALT_ROUNDS = 12;

        usrInfo.findOne({_id: db.getPrimaryKey(req.decoded.uId)}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                if(doc) {
                    if(bcrypt.compareSync(req.body.oldPass, doc.password)) {
                        usrInfo.updateOne({_id: db.getPrimaryKey(req.decoded.uId)}, {$set: {password: bcrypt.hashSync(req.body.newPass, BCRYPT_SALT_ROUNDS)}}, (uErr, result) => {
                            if(uErr) {
                                res.status(410).jsonp(uErr);
                                next(uErr);
                            } else {
                                res.status(200).jsonp('Password updated successfully!');
                            }
                        });
                    } else {
                        res.status(401).jsonp('Old password not matched!');
                    }
                }
            }
        });
    }
});

router.get('/api/user/all', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('userInfo').find({status: true}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});


router.post('/api/profileInformation', (req, res, next) => {
    console.log(req.body.mobile);
    db.getDB().collection('userInfo').findOne({mobileNo: req.body.mobileNo}).then((doc1) => {
        if(doc1)
           {  
            db.getDB().collection('order')
            .aggregate([
               
                { $match: {status: 'close', ownerNumber: req.body.mobileNo} },
                { $group : { 
                    _id : "$ownerNumber",
                    averageDelivery: { $avg: "$averageDelivery" },
                    paymentEase: { $avg: "$paymentEase" },
                    productPrice: { $avg: "$productPrice" },
                    productQuality: { $avg: "$productQuality" },
                    refundRating: { $avg: "$refundRating" },
                    returnRating: { $avg: "$returnRating" },
                    staffBehaviour: { $avg: "$staffBehaviour" },
                    staffHelping: { $avg: "$staffHelping" },        
                } },
                {$addFields : {"overallrating" : {$avg : ["$averageDelivery", "$paymentEase", "$productPrice", "$productQuality", "$refundRating", "$returnRating", "$staffBehaviour", "$staffHelping"]}}}
              
               
              ]).toArray((err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);
                    } else {
                        console.log(doc);
                        doc1["rating"] = doc[0];
                        res.status(200).jsonp(doc1);
                    }
                });
           }
        else
            res.status(404).jsonp('Profile not found!');
    })
    .catch(err => {
        res.status(410).jsonp(err);
        next(err);
    });
});

router.post('/api/addDiscount', midWare.checkToken, (req, res, next) => {
  
        

        db.getDB().collection('order').findOneAndUpdate({_id: ObjectID(req.body.id)},  {$set: req.body.val }, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                res.status(201).jsonp('Your profile information updated successfully!');
            }
        });
    
});


router.get('/api/getUserInformationData', (req, res, next) => {

    db.getDB().collection('order')
    .aggregate([
       
        { $match: {status: 'close', ownerNumber: '9845496618'} },
        { $group : { 
            _id : "$ownerNumber",
            averageDelivery: { $avg: "$averageDelivery" },
            paymentEase: { $avg: "$paymentEase" },
            productPrice: { $avg: "$productPrice" },
            productQuality: { $avg: "$productQuality" },
            refundRating: { $avg: "$refundRating" },
            returnRating: { $avg: "$returnRating" },
            staffBehaviour: { $avg: "$staffBehaviour" },
            staffHelping: { $avg: "$staffHelping" },        
        } },
        {$addFields : {"overallrating" : {$avg : ["$averageDelivery", "$paymentEase", "$productPrice", "$productQuality", "$refundRating", "$returnRating", "$staffBehaviour", "$staffHelping"]}}}
      
       
      ]).toArray((err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                console.log(doc);
                res.status(200).jsonp(doc);
            }
        });
    
});
module.exports = router;
