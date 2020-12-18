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
 })
module.exports = router;
