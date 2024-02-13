const express=require("express");
const router=express.Router();
const app=express();
const db=require('../db');
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const person=require('../models/person');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
    const newPerson=new person(data);
    response= await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"});
}
    
})
router.get('/',async (req,res)=>{
    try{
        const data=await person.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

router.get('/:workTyp',async(req,res)=>{
    try{ const workType=req.params.workTyp;
     if(workType=="chef"||workType=="manager"||workType=="waiter"){
             const response=await person.find({work:workType});
             res.status(200).json(response);
     }else{
         res.status(404).json({error:"invalid type"});
     }
    }catch(err){
         console.log(err);
         res.status(500).json({error:"internal server error"});
    }
 
 })

 router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const updatedata=req.body;
        const response=await person.findByIdAndUpdate(personid,updatedata,{
            new:true,
            runValidators:true,
        });
        if(!response){
            return res.status(404).json({eroor:"person not found"});
        }
        console.log("data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
 })

 router.delete('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const response=await person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({eroor:"person not found"});
        }
        console.log("data deleted");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
    }
 })
 
module.exports=router;