const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.send("This is Backend");
})
app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})