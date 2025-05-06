const mongoose = require('mongoose')

const ExpreiencScema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description:String,
    startDate: {
        type: String,
        required: true
    },
    endDate:Date,
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
      }],

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Experience', ExpreiencScema);