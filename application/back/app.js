"use strict";

// packages npm
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// routers
const problems = require('./routers/problems');

// object with all features of express
let app = express();

// parser
app.use(bodyParser.json());  // request applicaction/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// mount router
app.use('/problems', problems);


// port
app.listen( 5000 );

