const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
  imageUrl:String,
  ProjectUrl:String,
  gitHubUrl:String,
  featured:Boolean,
  skills:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Skill'
  }],
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Project', ProjectSchema);