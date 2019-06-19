// const ProductDescription = require('../database/models'); //mongoose mongo
// const dbHelpers = require('../database/index.js'); //mongodb mongo

// const ProductDescription = require('../db_postgres/index.js'); //sequelizepostgres 
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
// const client = require('../db_postgres/index.js'); //pg postgres client connect
const pool = require('../db_postgres/index.js'); // pg postgres pool


module.exports = {
  /*
  ========================================================
  ================PG=POOL=============POSTGRES============
  ========================================================
  */
  findOneRandom: (req, res) => {
    // let id = Math.floor(Math.random() * Math.floor(100000)) + 9000000;
    let id = req.query.productID;
    pool.query(`SELECT * FROM products WHERE id = ${id};`)
    // pool.query(`SELECT "productName" FROM "products" WHERE "productID" = ${id};`)
      .then(data => res.status(200).send(data.rows[0]))
      .catch(err => res.status(404).send(err));
  },
  recommendation: (req, res) => {
    let id = Math.floor(Math.random() * Math.floor(10000000));
    pool.query(`SELECT * FROM "products" WHERE "productID" >= ${id} AND "productID" < ${id+4};`)
      .then(data => res.status(200).send(data.rows))
      .catch(err => res.status(404).send('Error'));
  },
  /*
  ========================================================
  ================PG=CLIENT===========POSTGRES============
  ========================================================
  */
  // findOneRandom: (req, res) => {
  //   let id = 9000000 + Math.floor(Math.random() * Math.floor(100000))
  //   client.query(`SELECT * FROM "products" AS "product" WHERE "product"."productID" = ${id};`)
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  /*
  ========================================================
  ================SEQUELIZE===========POSTGRES============
  ========================================================
  */

  // findAll: (req, res) => {
  //   ProductDescription.findAll() 
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // deleteAll: (req, res) => {
  //   ProductDescription.destroy({ where: {}, truncate: true }) 
  //     .then(() => res.status(201).send('Deleted All'))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // findOneRandom: (req, res) => {
  //   // let id = 9000000 + Math.floor(Math.random() * Math.floor(100000))
  //   let id =  Math.floor(Math.random() * Math.floor(20));

  //   ProductDescription.findAll({ where: { productID: id } })
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // recommendation: (req, res) => {
  //   ProductDescription.aggregate([{ $sample: { size: 4 } }])
  //   .then(data => res.status(200).send(data))
  //   .catch(err => res.status(404).send('Error'));
  // },
  // findOneById: (req, res) => {
  //   const { _id } = req.params;
  //   ProductDescription.find({ _id })
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // }
    
  /*
  ========================================================
  ================SEQUELIZE===========POSTGRES============
  ========================================================
  */
  
  /*
  ========================================================
  ================MONGOOSE===========MONGO================
  ========================================================
  */

  // findAll: (req, res) => {
  //   ProductDescription.find({}) 
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // deleteAll: (req, res) => {
  //   ProductDescription.deleteMany({}) 
  //     .then(() => res.status(201).send('Deleted All'))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // findOneRandom: (req, res) => {
  //   let skipper = 9000000 + Math.floor(Math.random() * Math.floor(50));

  //   ProductDescription.find({ productID: skipper })
  //     .then(data => {
  //       console.log('running findonerandom function')
  //       res.status(200).send(data)
  //     })
  //     .catch(err => res.status(404).send('Error'))
  //   // ProductDescription.aggregate([{ $sample: { size: 1 } }])
  //   //   .then(data => res.status(200).send(data))
  //   //   .catch(err => res.status(404).send('Error'));
  // },
  // recommendation: (req, res) => {
  //   ProductDescription.aggregate([{ $sample: { size: 4 } }])
  //   .then(data => res.status(200).send(data))
  //   .catch(err => res.status(404).send('Error'));
  // },
  // findOneById: (req, res) => {
  //   const { _id } = req.params;
  //   ProductDescription.find({ _id })
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // }
    
  /*
  ========================================================
  ================MONGODB============MONGO================
  ========================================================
  */
  // findOneRandom: (req, res) => {
  //   let skipper = 9000000 + Math.floor(Math.random() * Math.floor(50));

  //   dbHelpers.get(skipper)
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // }
}





//import .json file to mongo
//mongoimport --db productDescription --collection productdescriptions --file ./seeding/mong10M.json --jsonArray
//minigun quick -d 60 -r 10 http://localhost:3002/productDescription/findOneRandom/
//minigun quick -d 60 -r 50 http://localhost:3002/productDescription/findOneRandom/
//minigun quick -d 60 -r 100 http://localhost:3002/productDescription/findOneRandom/
//minigun quick -d 60 -r 500 http://localhost:3002/productDescription/findOneRandom/
//minigun quick -d 60 -r 1000 http://localhost:3002/productDescription/findOneRandom/
//minigun report filename.json

//30 seconds of testing 5 requests per second

//log into postgres from local shell
//psql postgres://ec2-18-219-218-107.us-east-2.compute.amazonaws.com:5432/nordstroms angela