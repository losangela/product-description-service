/*
========================================================
================PG==CLIENT==========POSTGRES============
========================================================
*/

// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'nordstroms',
//   password: 'password',
//   // port: 3211,
// })
// client.connect()

// client.on('error', (err) => console.error('something bad has happened!', err.stack))

// // client.query(`SELECT 1+1 AS result`)
// // client.query(`CREATE TABLE IF NOT EXISTS "products" ("id"   SERIAL , "productName" TEXT NOT NULL, "designer" TEXT NOT NULL, "price" INTEGER NOT NULL, "stars" INTEGER NOT NULL, "reviews" INTEGER NOT NULL, "description" TEXT NOT NULL, "fit" TEXT NOT NULL, "sizes" TEXT NOT NULL, "colors" TEXT NOT NULL, "imageUrlsColor1" TEXT NOT NULL, "imageUrlsColor2" TEXT NOT NULL, "productID" INTEGER NOT NULL UNIQUE, PRIMARY KEY ("id"));`);
// // client.query(`SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'products' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;`)
// // client.query(`SELECT "id", "productName", "designer", "price", "stars", "reviews", "description", "fit", "sizes", "colors", "imageUrlsColor1", "imageUrlsColor2", "productID" FROM "products" AS "product" WHERE "product"."productID" = 9016832;`)

// module.exports = client;

/*
========================================================
================PG=POOL=============POSTGRES============
========================================================
*/

const pg = require('pg');

const config = {
  user: 'postgres',
  host: 'ec2-18-188-43-182.us-east-2.compute.amazonaws.com',
  database: 'nordstroms',
  password: '',
  max: 40,
  // min: 8,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  port: 5432
}

let pool = new pg.Pool(config);

module.exports = pool;

  /*
  ========================================================
  ================SEQUELIZE===========POSTGRES============
  ========================================================
  */
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('nordstroms', 'postgres', 'password', {
//   host: 'ec2-18-219-218-107.us-east-2.compute.amazonaws.com',
//   dialect: 'postgres'
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// const Products = sequelize.define('product', {
//   productName: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   designer: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   price: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   stars: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   reviews: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   fit: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   sizes: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   colors: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   imageUrlsColor1: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   imageUrlsColor2: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   productID : {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     unique: true,
//     // primaryKey: true
//   }
// }, {
//   timestamps: false,
//   indexes: [
//     {
//       name: 'productID',
//       method: 'BTREE',
//       fields: ['productID']
//     }
//   ]
// })

// sequelize.sync();
// module.exports = Products;