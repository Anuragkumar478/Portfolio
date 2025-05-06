const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Other'],
        required: true
      },
      proficiency: {
        type: Number,
        min: 1,
        max: 10,
        required: true
      },
      icon: String,
      featured: Boolean
    

});

module.exports = mongoose.model('Skill', SkillSchema);