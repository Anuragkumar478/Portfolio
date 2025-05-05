const express=require('express')
const app=express();
const db=require('./db');
const contact=require('./Routes/ContactRoutes')
app.use(express.json());
require('dotenv').config();

app.use('/work', (req,res)=>{
    res.send('that is working ');
})

app.use('/api',contact);
console.log('that is working ')
app.listen(3000);