const express=require("express");
const router=express.Router();
const app=express();
const db=require('../db');
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const menu=require("../models/item");

router.get('/',async (req,res)=>{
    try{
        const data=await menu.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
    const newMenu=new menu(data);
    response= await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"});
}}
)

router.get('/:taste',async (req,res)=>{
    try{
        const tasteType=req.params.taste;
        if(tasteType=="sour"||tasteType=="sweet"||tasteType=="spicy"){
            const response=await menu.find({taste:tasteType});
            res.status(200).json(response);
        }
        else{
            res.status(404).json("internal server error")
        }
    }catch(err){
        console.log(err);
    }
})
module.exports=router;