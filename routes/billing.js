const express = require('express');
const router = express.Router();
const fs = require("fs");
const pdfParse = require("pdf-parse");
const db = require('../module/dbConnect');
const midWare = require('../module/middleware');
const PDF2Pic = require("pdf2pic");
var pdf = require('html-pdf');


router.get('/api/bill/upload', (req, res, next) => {
    let pdfData = {};
    pdfData.filePath = "Medical_1573821016472_9845496618.pdf";
    fs.readFile("./public/pdfBills/"+pdfData.filePath, (err, pdfBuffer) => {
        pdfParse(pdfBuffer).then((data) => {
            //console.log(data);
            
            const splitText = data.text.split(/\r?\n/);
            
            pdfData.raw = data.text;
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

            //console.log(pdfData.total.replace(/[^a-zA-Z0-9]/g, ''));

            let pDate = pdfData.customer.split('-');
            //console.log(pDate[2]+"-"+pDate[1]+"-"+pDate[0]);
            
            pdfData.date = new Date(pDate[2]+"-"+pDate[0]+"-"+pDate[1]);



            let fNData = pdfData.filePath.split('_');
            let usrMobile = fNData[2].split('.');
            pdfData.deportment = fNData[0];
            pdfData.user = usrMobile[0];
            pdfData.genDate = new Date(fNData[1]*1000).toString();

            const pdf2pic = new PDF2Pic({
                density: 100,
                savename: pdfData.filePath,
                savedir: "./public/pdfBills/images",
                format: "jpg",
                size: "900x800"
            });

         //   console.log(pdfData);
            
                
            pdf2pic.convertBulk("./public/pdfBills/"+pdfData.filePath, -1).then((resolve) => {
                pdfData.billImg = resolve;
                db.getDB().collection('billing').insertOne(pdfData, (err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);

                    } else {
                        res.status(201).jsonp('Bill added successfully!');
                    }
                });
            });

        });
    });
});


router.get('/api/bill/:month/:year', midWare.checkToken, (req, res, next) => {
   
   db.getDB().collection('billing').find({user: req.decoded.mobile, date: {$gte: new Date(req.params.year+"-"+req.params.month+"-01"), $lt: new Date()}}).toArray((err, doc) => {
   // db.getDB().collection('billing').find({date: {$gte: new Date(req.params.year+"-"+req.params.month+"-01"), $lt: new Date()}}).toArray((err, doc) => {
        if(err) {
            res.status(410).jsonp(err);
            next(err);
        } else {
            //console.log(doc);
            res.status(200).jsonp(doc);
        }
    });
});

router.post('/api/bill/generateDealerBill', midWare.checkToken, (req, res, next) => {

    if (req.decoded.userType == 1) {
        req.decoded.userType = 'Dealer';
    } else if(req.decoded == 2) {
        req.decoded.userType = 'Retailer';
    } else {

    }
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd=`0${dd}`;
    } 

    if(mm<10) 
    {
        mm=`0${mm}`;
    } 
    today = `${mm}-${dd}-${yyyy}`;
    req.decoded['today'] = today;

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    req.decoded['time'] = strTime;
    var totalPrice = 0;
    
    for (let i=0; i< req.body.selectedProducts.length; i++) {
        totalPrice += parseInt(req.body.selectedProducts[i].price * req.body.selectedProducts[i].quantity);
    }
    req.decoded['totalPrice'] = totalPrice;
    const fileName = "FootWear_"+ new Date().getTime()+'_'+req.decoded.mobile;
   
     pdfGeneration(req.decoded, req.body.selectedProducts, req.body.company, true).then((ht) => {
  
      pdf.create(ht).toStream((err, stream) => {

        fs.createWriteStream('./public/html/'+fileName+'.pdf');
      });

   
      res.status(200).jsonp({"fileName": fileName+'.pdf'});
    }).catch((err) => {
        console.log(err);
   });
});

router.post('/api/bill/uploadGeneratedBills',  midWare.checkToken, (req, res, next) => {
    console.log(req.body);
    let pdfData = {};
    pdfData.filePath = req.body.fileName;
    res.status(200).jsonp({"fileName": "fileName"+'.pdf'});
    fs.readFile("./public/html/"+pdfData.filePath, (err, pdfBuffer) => {
        pdfParse(pdfBuffer).then((data) => {
            const splitText = data.text.split(/\r?\n/);
            pdfData.raw = data.text;
            pdfData.reports = [];
            let isParsingComplete = false;

            for (let itr = 0; itr < splitText.length; itr++) {
                let lineData = splitText[itr].trim();
                const dateFormat = /^(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])(\-)\d{4}$/;

                if (!pdfData.title && lineData.length > 0) {
                    pdfData.title = req.body.domain;
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

            //console.log(pdfData.total.replace(/[^a-zA-Z0-9]/g, ''));

            let pDate = pdfData.customer.split('-');
            
            //console.log(pDate[2]+"-"+pDate[1]+"-"+pDate[0]);
            
            pdfData.date = new Date();

            console.log(pdfData);
            let fNData = pdfData.filePath.split('_');
            let usrMobile = fNData[2].split('.');
            pdfData.deportment = req.body.companyName;
            pdfData.user = usrMobile[0];
            pdfData.genDate = new Date().toString();

            const pdf2pic = new PDF2Pic({
                density: 100,
                savename: pdfData.filePath,
                savedir: "./public/pdfBills/images",
                format: "jpg",
                size: "900x800"
            });

         
            
                
            pdf2pic.convertBulk("./public/html/"+pdfData.filePath, -1).then((resolve) => {
                pdfData.billImg = resolve;
                db.getDB().collection('billing').insertOne(pdfData, (err, doc) => {
                    if(err) {
                        res.status(410).jsonp(err);
                        next(err);

                    } else {
                        let billInfo = {
                            billDetails: pdfData,
                            paidBy: req.decoded.usrName,
                            usrNumber: req.decoded.mobile,
                            category: 'dashboard',
                            paymentMode: "",
                            payStatus: false,
                            createdOn: new Date().toString(),
                            updatedOn: new Date().toString(),
                            userType: req.decoded.userType,
                            retailerMobile: req.body.mobilenumber,
                            createdTimeStamp: new Date().getTime()
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
                });
            });

        });
    });
});

function pdfGeneration (userData, productList, company,a) {
    
  //  console.log(userData);
  return new Promise((resolve, reject) => {
      if(a) {
        var verificationEmail;
                verificationEmail =`<!doctype html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>A simple, clean, and responsive HTML invoice template</title>
                
                <style>
                .invoice-box {
                    max-width: 100%;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #000;
                }
                
                .invoice-box table {
                    width: 100%;
                    line-height: inherit;
                    text-align: left;
                }
                
                .invoice-box table td {
                    padding: 5px;
                    vertical-align: top;
                }
                
                .invoice-box table tr td:nth-child(2) {
                    text-align: right;
                }
                
                .invoice-box table tr.top table td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.top table td.title {
                    font-size: 45px;
                    line-height: 45px;
                    color: #333;
                }
                
                .invoice-box table tr.information table td {
                    padding-bottom: 40px;
                }
                
                .invoice-box table tr.heading td {
                    border-bottom: 3px solid #ddd;
                    font-weight: bold;
                }
                
                .invoice-box table tr.details td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.item td{
                    border-bottom: 1px solid #eee;
                }
                
                .invoice-box table tr.item.last td {
                    border-bottom: none;
                }
                
                .invoice-box table tr.total td:nth-child(2) {
                    border-top: 2px solid #eee;
                    font-weight: bold;
                }
                
                
                
                /** RTL **/
                .rtl {
                    direction: rtl;
                    font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                }
                
                .rtl table {
                    text-align: right;
                }
                
                .rtl table tr td:nth-child(2) {
                    text-align: left;
                }
                .setTextCenter {
                    text-align: center;
                }
                </style>
            </head>

            <body>
                <div class="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr class="top setTextCenter">
                            <td colspan="2">
                                ${company}
                            </td>
                        </tr>
                        
                        <tr class="information">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td>Customer:<br>
                                            Seller: Administrator<br>
                                        </td>
                                        
                                        <td>
                                            ${userData.today}<br>
                                            ${userData.time}<br>
                                            
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <tr class="setTextCenter">
                            <td colspan="2">
                                RECEIPT
                            </td>
                            
                        </tr>
                        
                        <tr class="heading">
                            <td>
                                Quantity X Description
                            </td>
                            
                            <td>
                                Total Amount
                            </td>
                        </tr>`;
                        for (let i=0; i< productList.length;i ++) {
                        verificationEmail += `<tr class="item">
                            <td>
                            ${productList[i].quantity} X ${productList[i].name}
                            </td>
                            
                            <td>
                            ${ productList[i].price}
                            </td>
                        </tr>`
                        }
                        
                        
                        verificationEmail += `<tr class="total">
                            <td></td>
                            
                            <td>
                            Total: ${userData.totalPrice}
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>`;
 resolve(verificationEmail);
                    } else {
                        reject();
                    }
});
}

module.exports = router;
