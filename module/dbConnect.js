const mgClient = require("mongodb").MongoClient;
const objectId = require('mongodb').ObjectID;
const dbName = "shoeSystem";
const dbURL = "mongodb://shoeAdmin:ZrvtqCDCKWF4829@35.184.211.242:27017/shoeSystem";
const mongoOption = { useUnifiedTopology: true };

//User: shoeAdmin
//Password: ZrvtqCDCKWF4829

// const admin = require('firebase-admin');

// let serviceAccount = require('./shoeSystem-e50115e7e936.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();


const state = {
  db: null
}

const connect = (cb) => {
  if(state.db)
    cb();
  else {
    mgClient.connect(dbURL, mongoOption, (err, client) => {
      if(err)
        cb('Error connection to database');
      else {
        state.db = client.db(dbName);
        cb();
      } 
    });
  }
}

const getPrimaryKey = (_id) => {
  return objectId(_id);
}


const getDB = () => {
    return state.db;
}

module.exports = {connect, getDB, getPrimaryKey};
