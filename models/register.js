const mongoose=require("mongoose")
const registerSchema=new mongoose.Schema({
    leadName:{
        type:String,
        required:true
    },
    
    members:{
        type:Number,
        required:true
    },
    teamName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },   
        
})
const registerModel=mongoose.model("register",registerSchema);

module.exports=registerModel;
