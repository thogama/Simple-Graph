//Local Host//
const express = require("express");
const app = express();
const path = require("path");
const router =  express.Router();



router.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/Server.js'));
})
	
app.use(express.static('Grafico'));

app.listen(process.env.port || 3000);

console.log("running at http://localhost:3000/");






