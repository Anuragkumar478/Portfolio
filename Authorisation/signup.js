const express=require('express');
const bcyrpt=require('bcrypt');
const jwt =require('jsonwebtoken');
const personModel =require('../Model/User');

require('dotenv').config();

const router=express.Router();

router.post('/signup',async (req,res)=>{
    const{name,email,password}=req.body;
    try{
 const existingUser=await personModel.findOne({email})
 if(existingUser)
    return res.status(400).json({message:'user already exist '});
    const hashPassword=await bcyrpt.hash(password,10)
   const newUser=await personModel.create({name,email,password:hashPassword})
  return  res.status(201).json({message: 'user create succefully '})
    }
    catch(err){
     return  res.status(500).json({message:err.message})
    }
});
const protect=require('./authMiddleWare');

router.get('/me',protect,async(req,res)=>{
    try{
    const user=await personModel.findById(req.user._id).select('-password')
    res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({message:'err message'})
    }
});

module.exports=router;
 
