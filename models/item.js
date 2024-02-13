const mongoose=require("mongoose");
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["sweet","sour","spicy"],
        required:true
    },
    is_drink:{
        type:Boolean,
        defualt:false,
        required:true
    },
    ingredients:{
        type:[String],
        defualt:[]
    },
    num_sales:{
        type:Number,
        defualt:0
    }
})

const item=mongoose.model("item",menuItemSchema);

module.exports=item;