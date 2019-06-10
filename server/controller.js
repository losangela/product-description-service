const ProductDescription = require('../database/models');
// const ProductDescription = require('../db_postgres/index.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
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
  //   ProductDescription.findAll({ where: { id: Math.floor(Math.random() * Math.floor(10000000)) } })
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send('Error'));
  // },
  // findGoodProducts: (req, res) => {
  //   let num = 5000000;
  //   ProductDescription.findAll({ where: { productID: num } })
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
  findOneRandom: (req, res) => {
    ProductDescription.find({}).skip(100000).limit(1)
      .then(data => {
        console.log('running findonerandom function')
        res.status(200).send(data)
      })
      .catch(err => res.status(404).send('Error'))
    // ProductDescription.aggregate([{ $sample: { size: 1 } }])
    //   .then(data => res.status(200).send(data))
    //   .catch(err => res.status(404).send('Error'));
  },



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
  ================MONGOOSE===========MONGO================
  ========================================================
  */
}