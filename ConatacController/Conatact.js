const nodemailer=require('nodemailer')

const personModel=require('../Model/personmdel')

exports.sendMessage=async(req,res)=>{
    const {name,email,message}=req.body;
    try{
        const contact=new personModel({name,email,message});
        await contact.save();
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASS
            }
        });
        await transporter.sendMail({
from:email,
to:process.env.EMAIL,
subject:`new message from ${name}`,
text:message
        });
        res.status(200).json({msg:'Message save & email send'})

    }
    catch(err){
res.status(500).json({msg:err.message});
    }
}