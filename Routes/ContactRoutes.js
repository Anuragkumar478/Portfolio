const express=require('express')
const router=express.Router();

const {sendMessage}=require('../ConatacController/Conatact');

router.post('/contact',sendMessage);
module.exports=router;
