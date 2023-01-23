var data=[];
var workData=[];
const express = require("express");
const bp = require("body-parser");
const date= require("./data.js")
const app = express();

app.use(bp.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));


app.get("/",function (req,res) {
    let currentDate=date.getDate();
    res.render('list', {whichDay: currentDate,data: data});
})
app.get("/work",function (req,res) {
    res.render('list', {whichDay: "Work",data: workData});
})
app.post("/work",function (req,res) {
    res.redirect("/");
})
app.post("/",function (req,res) {
    let name =req.body.Name;
    console.log(req.body);
    if(req.body.add=="Work")
    {
      workData.push(name);
      res.redirect("/work");
    }
    else
    {
        data.push(name);
        res.redirect("/");
    }
    
})
app.listen(3000,function () {
    console.log("server is running");
})