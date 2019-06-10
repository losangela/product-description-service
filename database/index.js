const mongoose = require('mongoose');
require('dotenv').config();

// let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/productDescription' : `mongodb+srv://matthewmata1030:${process.env.DB_PW}@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority`
let DB_URL = 'mongodb://localhost/productDescription';

// Connecting our local storage db to our application with the db name productDescription
const db = mongoose.connect(DB_URL, {useNewUrlParser: true});

module.exports = db;