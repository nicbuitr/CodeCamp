let mongoose = require("mongoose");
let Schema = mongoose.Schema;


// import from problems.json in home
// mongoimport --db exampleMongo --collection problems --drop --file problems.json

mongoose.connect('mongodb://localhost:27017/exampleMongo');

// specify the document
let problemDate = {
  name:String,
  type:String,
  statement:Array,
  input:String,
  output:String,
  constraints:Object,
  sampleInput: Array,
  sampleOutput: Array,
  tags:Object,
  made: Boolean,
  lenguage: Array
};

let problemScheme = new Schema( problemDate );


// collection => problems
let Problem = mongoose.model( "problem", problemScheme );

// export Problem
module.exports.Problem = Problem;
