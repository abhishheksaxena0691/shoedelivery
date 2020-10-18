const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./module/dbConnect");

const app = express();

db.connect((err) => {
  if(err) {
    console.log("Unable to connect with database");
  } else {
    console.log("Database connection established!");
  }
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Include routes */
const auth = require('./routes/usrAuth');
const billing = require('./routes/billing');
const profile = require('./routes/profile');
const payee = require('./routes/payee');
const delivery = require('./routes/delivery');
const products = require('./routes/products');
const quote = require('./routes/quote');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token,authorization');

    //res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

/* User Request */
app.use(auth);
app.use(billing);
app.use(profile);
app.use(payee);
app.use(delivery);
app.use(products);
app.use(quote);

app.use('/', express.static(path.join(__dirname, 'public')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use((req, res, next) => {
  res.status(404).jsonp('Unauthorized request!')
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).jsonp('Internal server error!');
});

app.listen(8080, () => {
  console.log('server started port:8080');
});
