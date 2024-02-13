const mongoose=require('mongoose');

require('dotenv').config();
//define mongodb connection url
const mongoURL=process.env.DB_URL;

//setup mongodb connection
mongoose.connect(mongoURL,{
     useNewUrlParser:true,
    useUnifiedTopology:true
});

//get the default connection 
//mongoose maintains an default connection object representing the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to db");
});

db.on('error',(err)=>{
    console.log("the error is",err);
});


db.on('disconnected',()=>{
    console.log("disconnected to db");
});

//exporting the database connection

module.exports=db;