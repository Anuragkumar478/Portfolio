const express=require('express');
const bcyrpt=require('bcrypt');
const jwt =require('jsonwebtoken');
const User =require('../Model/User');
const { name } = require('ejs');
require('dotenv').config();

const router=express.Router();

router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
      const user= await User.findOne({email});
      if(!user)return res.status(404).json({message:'user not found'})
     
        const isMatch=await bcyrpt.compare(password,user.password);
        if(!isMatch)return res.status(401).json({message:'invalid credential'})

            const token=jwt.sign(
                {_id:user._id},
                process.env.JWT_SECRET,
                {expiresIn:process.env.JWT_EXPIRES_IN}
            );
             res.status(200).json({token,user:{name:user.name , email:user.email}})
    }
    catch(err){
        res.status(500).json({message: err.message })
    }
})
module.exports=router;