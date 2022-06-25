//Team Solei Booru App Api
//Backend made by Team Solei's Izumi
//use npm cors if u ever encounter a cors error
//referenced at 12:16

//Headers and Variables
const express = require('express');
const app = express();
const PORT = 3000;
const indexRouter = require('./routers/indexRouters')
const server = require('./routers/server')
const mongoose = require("mongoose");
const cors = require("cors")
const {createServer} = require('http')
const fs = require('fs');

//learn https








//Middleware
app.use(cors());
app.use(express.json());
app.use(indexRouter);

//Database 
mongoose.connect(
    "verify yourself to izumifuru for the log in" ,
{useUnifiedTopology: true, useNewUrlParser: true}, 
(req, res)=>{
   
console.log("connected : D")
})


app.listen(3000)




