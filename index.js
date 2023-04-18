const express = require("express");
const db =require("./config/db");
const models=require("./models/index.model")
const app=express();

app.use(express.json());
db.authenticate().then(()=>{
    db.sync({force:true});
    console.log("connect");
});



app.listen(5000,()=>{
  console.log("running");
})