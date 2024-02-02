const express=require("express");
const route=express.Router();

route.post("/api/register",require("../routeController/register"));
 
  module.exports=route;