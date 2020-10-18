const express = require('express');
const router = express.Router();
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');


router.post('/api/quote', midWare.checkToken, (req, res, next) => {
    if(!req.body) {
        res.status(400).jsonp('Incomplete information');
    } else {
        let quote =  {
            factory: req.body.factory,
            products: req.body.products,
            usrId: req.decoded.uId,
            price: req.body.total,
            date: new Date()
        };
        db.getDB().collection('quote').insertOne(quote, (err, doc) => {
            if(err) {
                res.status(410).jsonp(err);
                next(err);
            } else {
                res.status(200).jsonp("Quote submitted successfully!");
            }
        });
    }
});


router.get('/api/quotes', midWare.checkToken, (req, res, next) => {
    db.getDB().collection('quote').find({usrId: req.decoded.uId}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
});


module.exports = router;