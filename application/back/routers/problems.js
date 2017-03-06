"use strict";

const express = require('express');
const router = express.Router();
const Problem = require( '../models/problem' ).Problem;


router.get("/", (resquest, response) => {

  // return all problems
  Problem.find( (error, problem) => {
    if (error)
      response.status(500).send( "error" );
    else
      response.status(200).send( problem );
  });
});

router.post( "/", (request, response) => {
  response.redirect('/');

});

// export route
module.exports = router;
