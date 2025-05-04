const express=require('express')
const app=express();

app.use('/work', (req,res)=>{
    res.send('that is working ');
})
console.log('that is working ')
app.listen(3000);