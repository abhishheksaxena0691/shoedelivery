const express = require('express');
const router = express.Router();
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');


router.post('/api/delivery', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('billing').findOne({_id: db.getPrimaryKey(req.body.billId), userType: req.decode.userType}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(!doc) {
                res.status(410).jsonp("Bill doesn't exist!");
            } else {
                
                let billInfo = {
                    billDetails: doc,
                    paidBy: req.decoded.usrName,
                    usrNumber: req.decoded.mobile,
                    address: req.body.address,
                    paymentMode: req.body.payMode,
                    category: "delivery",
                    payStatus: false,
                    createdOn: new Date().toString(),
                    updatedOn: new Date().toString()
                };

                db.getDB().collection('delivery').insertOne(billInfo, (err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);
                    } else {
                        res.status(200).jsonp("Delivery request send successfully!");
                    }
                });
            }
        }
    });
});

router.get('/api/delivery/all', midWare.checkToken, (req, res, next) => {
    console.log(req.decoded);
    db.getDB().collection('delivery').find({usrNumber: req.decoded.mobile}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});

router.post('/api/delivery/moveToDelivery', midWare.checkToken, (req, res, next) => {
    console.log(req.body);
    db.getDB().collection('delivery').findOneAndUpdate({_id: db.getPrimaryKey(req.body.billId)}, {$set: {paymentMode: req.body.payMode, category: 'delivery', payStatus: true, address:req.body.address  }}, {returnOriginal: false}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.value)
                res.status(201).jsonp('payment status updated successfully!');
            else
                res.status(410).jsonp("Invalid . Please check again!");
        }
    });
});

router.post('/api/delivery/updatePaymentMode', midWare.checkToken, (req, res, next) => {
    console.log(req.body);
    db.getDB().collection('delivery').findOneAndUpdate({_id: db.getPrimaryKey(req.body.billId)}, {$set: {paymentMode: req.body.payMode, payStatus: true  }}, {returnOriginal: false}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.value)
                res.status(201).jsonp('payment status updated successfully!');
            else
                res.status(410).jsonp("Invalid sponsor. Please check again!");
        }
    });
});

router.post('/api/delivery/updatedeliveryCredit', midWare.checkToken, (req, res, next) => {
    console.log(req.body);
    db.getDB().collection('delivery').findOneAndUpdate({_id: db.getPrimaryKey(req.body.billId)}, {$set: {paymentMode: 'credit', payStatus: false, category: 'credit' }}, {returnOriginal: false}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.value)
                res.status(201).jsonp('Delivery Satus updated successfully!');
            else
                res.status(410).jsonp("Invalid sponsor. Please check again!");
        }
    });
});
router.post('/api/delivery/updateInvoiceStatus', midWare.checkToken, (req, res, next) => {
    console.log(req.body);
    db.getDB().collection('delivery').findOneAndUpdate({_id: db.getPrimaryKey(req.body.billId)}, {$set: {invoiceStatus: parseInt(req.body.status)}}, {returnOriginal: false}, (err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            if(doc.value)
                res.status(201).jsonp('Invoice Satus updated successfully!');
            else
                res.status(410).jsonp("Invalid . Please check again!");
        }
    });
});
// router.put('/api/sponsor/:spId', midWare.checkToken, (req, res, next) => {
//     db.getDB().collection('payee').findOneAndUpdate({_id: db.getPrimaryKey(req.params.spId)}, {$set: {status: true}}, {returnOriginal: false}, (err, doc) => {
//         if(err) {
//             res.status(410).jsonp(err);
//             next(err);
//         } else {
//             if(doc.value)
//                 res.status(201).jsonp('Your payee approved successfully!');
//             else
//                 res.status(410).jsonp("Invalid sponsor. Please check again!");
//         }
//     });
// });

// router.get('/api/payee', midWare.checkToken, (req, res, next) => {
//     db.getDB().collection('payee').find({sponsor: req.decoded.mobile}).toArray((err, doc) => {
//         if(err) {
//             res.status(410).jsonp(err);
//             next(err);
//         } else {
//             res.status(200).jsonp(doc);
//         }
//     });
// });


// router.delete('/api/sponsor/:spId', midWare.checkToken, (req, res, next) => {
//     db.getDB().collection('payee').deleteOne({_id: db.getPrimaryKey(req.params.spId)}, (err, doc) => {
//         if(err) {
//             res.status(410).jsonp(err);
//             next(err);
//         } else {
//             res.status(200).jsonp("Sponsor/Payee deleted successfully!");
//         }
//     });
// });

module.exports = router;