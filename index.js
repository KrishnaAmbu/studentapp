// express index.js
const express = require('express');
const cors = require('cors');
const app = new express();
app.use(cors());
app.get("/",(req,res)=>{
    console.log("request received");
    res.json("hello world");
})

app.get("/hi",(req,res)=>{
    console.log("hi request received");
    res.json("welcome to nodemon");
})
app.get("/people",(req,res)=>{
    console.log("people request received");
    res.json([{name:"krishna",role:"student"},
{name:"dilna",role:"teacher"}]);
})
app.get("/student",(req,res)=>{
    console.log("student request received");
    res.json([{name:"tiya",age:20,dept:"it"},
{name:"manasa",age:19,dept:"CS"}]);
})

app.listen("4000",()=>{
    console.log("started server on 4000");
});
