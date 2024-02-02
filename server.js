const express=require("express");
const route=require("./route/routes");

const app=express();
app.use(express.json());
const port=8070;

app.use("/",route);
const mongoos=require("mongoose");
mongoos.connect("mongodb+srv://edwin_hackathon:edwinstuff@hackathon.ihrdtbt.mongodb.net/Participants")
.then(()=>{
    console.log("Mongodb got connected");
})
.catch((err)=>{
    console.log(err);
    console.log("error");
})

app.listen(port,()=>{
    console.log(`The server started on port ${port}`);
})