// import packages npm
const express = require( 'express' );
const bodyParser = require( 'body-parser' );





// object with all features of express
let app = express();


app.set( 'view engine', 'ejs' );

app.use( bodyParser.json() ); // request applicaction/json
app.use( bodyParser.urlencoded( {extended: true} ) );


app.get( "/", ( request, response ) => {
   response.send( 'hello world!!!' );
});


// port listen
app.listen( 3000 );

