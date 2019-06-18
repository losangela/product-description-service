const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

// Creating server and port number
const app = express();
const port = process.env.PORT || 3002;

// Middleware
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serves static HTML file
app.use(express.static(path.join(__dirname, '../client/dist')));

// Router to handle all requests
app.use('/productDescription', router);

//for stress testing
app.use('/loaderio-062423167a76b91d3d4f10cb23bf2aab', (req, res, next) => res.send('loaderio-062423167a76b91d3d4f10cb23bf2aab'))

// Verifies and sets port on where server is listening at
app.listen(port, () => console.log(`Example app listening on port ${port}!`));