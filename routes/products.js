const express = require('express');
const router = express.Router();
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');
var ObjectId = require('mongodb').ObjectID;

router.get('/api/category/product/:url', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('productCategory').find({type: req.params.url}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});


router.get('/api/product/:type/:cate', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('product').find({type: req.params.type, category: req.params.cate}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});

router.post('/api/product/getProductList',  midWare.checkToken,  (req, res, next) => {
    console.log(req.body.name);
    db.getDB().collection('product').find({"name": { $regex: req.body.name+'.*', $options: 'i'}, "ownerNumber":  req.decoded.mobile}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
    
});

router.post('/api/product/addProduct',  midWare.checkToken,  (req, res, next) => {
    db.getDB().collection('product').find({"ownerNumber": req.body.ownerNumber, "name": { $regex: req.body.name.trim(), $options: 'i'}}).toArray((err, doc) => {
        if (doc.length ==0) {
                db.getDB().collection('product').insertOne(req.body, (err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);

                    } else {
                        res.status(201).jsonp('product added successfully!');
                    }
                });
            } else {
                res.status(410).jsonp('Product already exist');
            }
    });
});

router.post('/api/product/editProduct',  midWare.checkToken,  (req, res, next) => {
    const id = req.body.currentIndexId;
    delete req.body.currentIndexId;
    db.getDB().collection('product').find({"ownerNumber": req.body.ownerNumber, "name": { $regex: req.body.name.trim(), $options: 'i'}}).toArray((err, doc) => {
        if (doc.length ==0) {
                db.getDB().collection('product').findOneAndUpdate({"_id": ObjectId(id)}, {$set: req.body}, {returnOriginal: false}, (err, doc) => {
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
        } else {
            res.status(410).jsonp('Product already exist');
        }
        });
    
});

router.post('/api/product/deleteProduct',  midWare.checkToken,  (req, res, next) => {
    console.log(req.body);
        db.getDB().collection('product').deleteOne({_id: ObjectId(req.body.id)}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                res.status(200).jsonp("Sponsor/Payee deleted successfully!");
            }
        });
});

router.get('/api/product/myOrder',  midWare.checkToken,  (req, res, next) => {
    db.getDB().collection('order').find({$or:[{ownerNumber: req.decoded.mobile} , {senderNumber: req.decoded.mobile}]}).sort({createdOn: -1}).toArray((err, doc) => {
             if(err) {
                 res.status(410).jsonp(err);
                 next(err);
             } else {
                 //console.log(doc);
                 res.status(200).jsonp(doc);
             }
         });
});


router.post('/api/product/updateStatus',  midWare.checkToken,  (req, res, next) => {
    
    if (req.body.value.status == 'invoicerequestByretailer') {
        db.getDB().collection('order').updateMany({"orderId": req.body.orderId}, {$set: {status: 'rejectByRetailer'}}, {returnOriginal: false}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                db.getDB().collection('order').findOneAndUpdate({"_id": ObjectId(req.body.id)}, {$set: req.body.value}, {returnOriginal: false}, (err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);
                    } else {
                       
                        res.status(201).jsonp('Your account verified successfully!');
                    }
                    
                });
            }
        });

    } else {
        db.getDB().collection('order').findOneAndUpdate({"_id": ObjectId(req.body.id)}, {$set: req.body.value}, {returnOriginal: false}, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
               
                res.status(201).jsonp('Your account verified successfully!');
            }
            
        });
    }
});

router.post('/api/product/InvoiceSend',  midWare.checkToken,  (req, res, next) => {
    
    db.getDB().collection('order').findOneAndUpdate({"_id": ObjectId(req.body.id)}, {$set: req.body.value}, {returnOriginal: false}, (err, doc) => {
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
});

router.post('/api/product/updatingRating',  midWare.checkToken,  (req, res, next) => {
    
    db.getDB().collection('order').findOneAndUpdate({"_id": ObjectId(req.body.id)}, {$set: req.body.value}, {returnOriginal: false}, (err, doc) => {
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
});

router.post('/api/product/getProductListtest',  midWare.checkToken,  (req, res, next) => {
    
    db.getDB().collection('product').find({}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            for (let i=0; i <doc.length;i++) {
                        db.getDB().collection('product').findOneAndUpdate({"_id": ObjectId(doc[i]._id)}, {$set: {"name": doc[i].name.trim()}}, {returnOriginal: false}, (err, doc) => {
                            if(err) {
                                res.status(410).jsonp(err);
                                next(err);
                            } else {
                                
                            }
                            
                        });
            }
        }
    });
    
});
module.exports = router;