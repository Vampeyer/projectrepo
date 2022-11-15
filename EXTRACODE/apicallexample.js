let express = require ('express');
let app = express();

let router = express.Router();

let pies = [ {"id": 1, "name": "Apple"},
         {"id": 2, "name": "Cherry" },            
            ];




router.get( '/', function(req, res, next){
    res.send(pies);

});

var server =  app.listen(5000, function () {
    console.log("Run this bull shit on host 5000! ")


})