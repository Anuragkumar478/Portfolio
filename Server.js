const express=require('express')
const cors = require('cors');
const app=express();
const db=require('./db');
const contact=require('./Routes/ContactRoutes');
const skillRoutes = require('./Routes/skillRoutes');
const experienceRoutes = require('./Routes/experienceRoutes');
const projectRoutes = require('./Routes/projectRoutes');
app.use(cors());
app.use(express.json());
require('dotenv').config();

app.use('/work', (req,res)=>{
    res.send('that is working ');
})

app.use('/api',contact);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);

console.log('that is working ')
app.listen(3000);