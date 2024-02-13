const express = require('express');
const app = express();
const db=require('./db');
require('dotenv').config();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const person=require('./models/person');
const port=process.env.PORT || 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    
  res.send("welcome to our hotel");

})

const personRoutes=require("./routes/personRoutes");

app.use('/person',personRoutes);

const menuRoutes=require("./routes/menuRoutes");

app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("the server is running");
});