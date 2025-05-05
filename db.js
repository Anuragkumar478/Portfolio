const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

const db=mongoose.connection;
db.on('connect',()=>{
    console.log('connect to mongodb ');
})
console.log('Mongo db connected');