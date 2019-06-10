const Sequelize = require('sequelize');
const sequelize = new Sequelize('nordstroms', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Products = sequelize.define('product', {
  productName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  designer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reviews: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  fit: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sizes: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  colors: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrlsColor1: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrlsColor2: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  productID : {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
})

sequelize.sync();
module.exports = Products;


// const takeOne = connection.define('takeOne', {
//     _productName: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     _category: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _designer: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     _designerDescription: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     _price: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     _reviewStars: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     _reviews: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     _productDescription: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _productDetails: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _helpfulInfo: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _sizeInfoList: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _sizeInfoFit: {
//       type: Sequelize.TEXT,
//       allowNull: false
//     },
//     _sizeInfoOther: {
//       type: Sequelize.ARRAY(Sequelize.TEXT),
//       allowNull: false
//     },
//     _colors: {
//       type: Sequelize.TEXT, // json stringified object
//       allowNull: false
//     }

//   }, {
//     freezeTableName: true
//     // options
//   });


// let productName = []
// let _category = ["Dresses", "casual", "OCCASION", "LENGTH", "SLEEVE_LENGTH", "DRESS_STYLE", "MATERIAL", "NECK_STYLE", "PATTERNS"];
// let _designer = "Guccccccci";
// let _designerDescription = "Gucci da best yo";
// let _price = 9999;
// let _reviewStars = 0;
// let _reviews = 666;
// let _productDescription = ["Diamond perforations add subtle texture and vintage charm to this standby block-heel bootie.", "AND THEN SOME!!!"];
//  // first string is intro descripton, second string is consequent description.
// let _productDetails = [`1 1/2" heel (size 8.5)`, `3 1/2" shaft`, `Side zip closure; adjustable side laces`, `Leather upper/synthetic lining/rubber sole`, `Imported`, `Women's Shoes`, `Item #5674302`]; // bullet point of details and care
// let _helpfulInfo = [`The Best Dress for Your Body Type`];
// let _sizeInfoList = [`Small`, `Medium`, `Large`];
// let _sizeInfoFit = "this one's juuuuuuust right";
// let _sizeInfoOther = [`Offers light support for most A-C cup sizes.`, `Band : XS=32, S=34, M=36, L=38, XL=40.`];
// let _colors = {
//     red: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/81550d72-25ad-48d7-a21d-e72bfebbfbb7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/4ad7d4f4-3cc9-4ecb-8aaf-6321af2b556f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/d8a9674d-165d-4732-8aa1-1f147db06bc2.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg"]
//     },
//     blue: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/5e6ed652-70f6-48f6-b58c-1059a426333b.jpeg","https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/16033106-3b37-45ed-b8ff-34641381a8dd.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/734e30bd-2a47-49c4-adcc-d4bc48a10a79.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/91dfb05d-3079-421f-909a-ba14246951be.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/1f5a0e58-b700-4b7b-bd2d-5b8f0bf83e8f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg"]
//     },
//     yellow: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/81550d72-25ad-48d7-a21d-e72bfebbfbb7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/4ad7d4f4-3cc9-4ecb-8aaf-6321af2b556f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/d8a9674d-165d-4732-8aa1-1f147db06bc2.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg"]
//     },
//     green: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/5e6ed652-70f6-48f6-b58c-1059a426333b.jpeg","https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/16033106-3b37-45ed-b8ff-34641381a8dd.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/734e30bd-2a47-49c4-adcc-d4bc48a10a79.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/91dfb05d-3079-421f-909a-ba14246951be.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/1f5a0e58-b700-4b7b-bd2d-5b8f0bf83e8f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg"]
//     }
//   }

// let fakeData = {
//   _productName: "fake Clothes",
//   _category: ["Dresses", "casual", "OCCASION", "LENGTH", "SLEEVE_LENGTH", "DRESS_STYLE", "MATERIAL", "NECK_STYLE", "PATTERNS"], // all the categories of dresses shown on official webpage
//   _designer: "Guccccccci",
//   _designerDescription: "Gucci da best yo",
//   _price: 9999,
//   _reviewStars: 0,
//   _reviews: 666,
//   _productDescription: ["Diamond perforations add subtle texture and vintage charm to this standby block-heel bootie.", "AND THEN SOME!!!"], // first string is intro descripton, second string is consequent description.
//   _productDetails: [`1 1/2" heel (size 8.5)`, `3 1/2" shaft`, `Side zip closure; adjustable side laces`, `Leather upper/synthetic lining/rubber sole`, `Imported`, `Women's Shoes`, `Item #5674302`], // bullet point of details and care
//   _helpfulInfo: [`The Best Dress for Your Body Type`],
//   _sizeInfoList: [`Small`, `Medium`, `Large`],
//   _sizeInfoFit: "this one's juuuuuuust right",
//   _sizeInfoOther: [`Offers light support for most A-C cup sizes.`, `Band: XS=32, S=34, M=36, L=38, XL=40.`],
//   _colors: {
//     red: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/81550d72-25ad-48d7-a21d-e72bfebbfbb7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/4ad7d4f4-3cc9-4ecb-8aaf-6321af2b556f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/d8a9674d-165d-4732-8aa1-1f147db06bc2.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg"]
//     },
//     blue: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/5e6ed652-70f6-48f6-b58c-1059a426333b.jpeg","https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/16033106-3b37-45ed-b8ff-34641381a8dd.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/734e30bd-2a47-49c4-adcc-d4bc48a10a79.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/91dfb05d-3079-421f-909a-ba14246951be.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/1f5a0e58-b700-4b7b-bd2d-5b8f0bf83e8f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg"]
//     },
//     yellow: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/81550d72-25ad-48d7-a21d-e72bfebbfbb7.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/4ad7d4f4-3cc9-4ecb-8aaf-6321af2b556f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/d8a9674d-165d-4732-8aa1-1f147db06bc2.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/cf7a3ef7-b453-46fe-beb5-e1a8d5ab105b.jpeg"]
//     },
//     green: {
//       icon: `https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg`,
//       photos: ["https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/5e6ed652-70f6-48f6-b58c-1059a426333b.jpeg","https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/16033106-3b37-45ed-b8ff-34641381a8dd.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/734e30bd-2a47-49c4-adcc-d4bc48a10a79.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/91dfb05d-3079-421f-909a-ba14246951be.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/1f5a0e58-b700-4b7b-bd2d-5b8f0bf83e8f.jpeg", "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/White+Black+Polka+Dot/b7705e0a-5899-4cd9-85af-55c2edb6c0b2.jpeg"]
//     }
//   }
// }

// module.exports = { connection, Item }