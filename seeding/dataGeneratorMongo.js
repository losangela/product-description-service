const mongoose = require('mongoose');
const fs = require('fs');

const dressData = require('./dressDataReduced.json');

// Random Data Arrays
const designers = ['Something Navy', 'Eliza J', 'Leith', 'Free People', 'BP.', 'Chelsea28', 'Harper Rose', 'Charles Henry', 'Rachel Parcell', 'Gibson', 'WAYF']
const fits = ["Runs large; order one size down.", "True to size.", "Runs small; order one size up."];

// Seed Data function that randomizes a single data object
const seedData = () => {
  // Gets a random index from the Dress Data json array
  const dressDataRandomInt = Math.floor(Math.random() * dressData.length);
  
  // Grabs the data object from the json array
  const productName = dressData[dressDataRandomInt].productName;
  const description = dressData[dressDataRandomInt].description;
  const colors = JSON.stringify(dressData[dressDataRandomInt].colors);
  const imageUrlsColor1 = JSON.stringify(dressData[dressDataRandomInt].imageUrlsColor1);
  const imageUrlsColor2 = JSON.stringify(dressData[dressDataRandomInt].imageUrlsColor2);
  // Grabs the data from the Random Data Array
  const designer = designers[Math.floor(Math.random() * 11)];
  const fit = fits[Math.floor(Math.random() * 3)];
  // Randomizes a number 
  const price = Math.floor(Math.random() * (300 - 100)) + 100;
  const stars = Math.floor(Math.random() * (5 - 1)) + 1;
  const reviews = Math.floor(Math.random() * (20 - 10)) + 10;
  // Static size Array
  const sizes = JSON.stringify(['XX-Small', 'X-Small', 'Small', 'Medium', 'Large']);
  
  return { productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2 }
}


//writes 10m data into ./mong10M.json
const productStream = fs.createWriteStream('./mong10M.json', {flags: 'a'});
function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 0;
  let max = 10000000;
  write();
  function write() {
    let ok = true;
    
    do {
      if (i === 0) {
        writer.write('[', encoding);
      }
      i++;
      if (i === max) {
        // last time!
        data = seedData();
        // data.productID = i; // not needed for mongo
        // data = Object.values(data).join('|') + '\n';
        data = JSON.stringify(data) + ']';
        writer.write(data, encoding, callback);
      } else {
        let data = seedData();
        data.productID = i;
        // data = Object.values(data).join('|') + '\n';
        data = JSON.stringify(data) + ',';
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i < max && ok);
    if (i < max) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

// runs seeding function
writeOneMillionTimes(productStream, null, 'utf8', () => {
  mongoose.connection.close();
  console.log('yay')
})


//import .json file to mongo
//mongoimport --db productDescription --collection productdescriptions --file mong50.json --jsonArray