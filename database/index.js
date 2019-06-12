// MONGODB NO MONGOOSE
const mongo = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
let db;
// Use connect method to connect to the server
mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err)
    return
  } else {
    db = client.db('productDescription')
  }
})

const dbHelpers = (num = 9500000) => {
  return new Promise ((resolve, reject) => {
    db.collection('productdescriptions').findOne({ productID: num }, (err, items) => {
      if (err){
        reject({hello: 'hello world',...err});
      } else {
        resolve(items)
      }
    })
  })
}

module.exports.get = dbHelpers;

//MONGOOSE

// const mongoose = require('mongoose');
// require('dotenv').config();

// // let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/productDescription' : `mongodb+srv://matthewmata1030:${process.env.DB_PW}@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority`
// let DB_URL = 'mongodb://localhost/productDescription';

// // Connecting our local storage db to our application with the db name productDescription
// const db = mongoose.connect(DB_URL, {useNewUrlParser: true});

// module.exports = db;