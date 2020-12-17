const express = require('express');
const router = express.Router();
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');


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
    db.getDB().collection('product').find({"name": { $regex: req.body.name+'.*', $options: 'i'}}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            res.status(200).jsonp(doc);
        }
    });
    
});


module.exports = router;