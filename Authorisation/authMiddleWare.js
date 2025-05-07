const jwt=require('jsonwebtoken')
require('dotenv').config();


const protect=(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if(!token)
        return res.status(401).json({message:'Acces Denied no token'});
    try{
      const decode=jwt.verify(token,process.env.JWT_SECRET)
      req.user=decode;
      next();
    }
    catch(err){
   return res.status(500).json({message:'Invalid token '})
    }

}
module.exports=protect;