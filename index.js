var express=require('express');
var exphbs = require('express-handlebars');
var app=express();
var routes=require('./routes/route.js');
app.use(express.static('public',{root:'.'}));
app.set('view engine','handlebars');
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.get('/',routes.home);
  app.get('/:city',routes.city);var port = process.env.PORT  || 8080; 
app.listen(port);