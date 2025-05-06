const express = require('express');
const router = express.Router();
const Skill = require('../Model/Skill');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single skill
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new skill (protected in real app)
router.post('/', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    category: req.body.category,
    proficiency: req.body.proficiency,
    icon: req.body.icon,
    featured: req.body.featured
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;