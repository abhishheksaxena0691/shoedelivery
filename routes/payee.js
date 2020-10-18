const express = require('express');
const router = express.Router();
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');


router.post('/api/sponsor', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('userInfo').countDocuments({mobileNo: req.body.mobileNo}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc == 0) {
                res.status(410).jsonp("Sponsor doesn't exist!");
            } else {
                const collection = db.getDB().collection('payee');
                collection.find({payee: req.decoded.mobile, sponsor: req.body.mobileNo}).toArray((pErr, pDoc) => {
                    if(pErr) {
                        res.status(410).jsonp(err);
                        next(err);
                    } else {
                        if(pDoc.length != 0) {
                            res.status(410).jsonp("Sponsor already exist!");
                        } else {
                            let spInfo = {
                                payee: req.decoded.mobile,
                                payeeName: req.decoded.usrName,
                                sponsor: req.body.mobileNo,
                                sponsorName: req.body.spName,
                                status: false,
                                createdOn: new Date().toString(),
                                updatedOn: new Date().toString()
                            };

                            db.getDB().collection('payee').insertOne(spInfo,(err, doc) => {
                                if(err) {
                                    res.status(410).jsonp(err);
                                    next(err);
                                } else {
                                    res.status(200).jsonp("Sponsor request send successfully!");
                                }
                            });
                        }
                    }
                })
            }
        }
    });
});


router.post('/api/sponsor/bill', midWare.checkToken, (req, res, next) => {
    const collection = db.getDB().collection('sponsorBill');
    collection.countDocuments({sponsor: req.body.sponsor, billDetails: {_id: req.body.billId}}, (pErr, pDoc) => {
        if(pErr) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(pDoc != 0) {
                res.status(410).jsonp("Bill already sponsored!");
            } else {
                
                collection.insertOne(req.body,(err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);
                    } else {
                        res.status(200).jsonp("Bill sent to Sponsor successfully!");
                    }
                });
            }
        }
    });
});

router.get('/api/sponsor/bill', midWare.checkToken, (req, res, next) => {
    const collection = db.getDB().collection('sponsorBill');
    collection.find({payee: req.decoded.mobile}).toArray((err, doc) => {
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

router.get('/api/payee/bill', midWare.checkToken, (req, res, next) => {
    const collection = db.getDB().collection('sponsorBill');
    collection.find({sponsor: req.decoded.mobile}).toArray((err, doc) => {
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

router.put('/api/sponsor/:spId', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('payee').findOneAndUpdate({_id: db.getPrimaryKey(req.params.spId)}, {$set: {status: true}}, {returnOriginal: false}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.value)
                res.status(201).jsonp('Your payee approved successfully!');
            else
                res.status(410).jsonp("Invalid sponsor. Please check again!");
        }
    });
});

router.get('/api/sponsor', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('payee').find({payee: req.decoded.mobile}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});

router.get('/api/payee', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('payee').find({sponsor: req.decoded.mobile}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});


router.delete('/api/sponsor/:spId', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('payee').deleteOne({_id: db.getPrimaryKey(req.params.spId)}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp("Sponsor/Payee deleted successfully!");
        }
    });
});

module.exports = router;