const express = require('express');
const router = express.Router();
const Experience = require('../Model/Expreince');

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().populate('skills');
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single experience
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id).populate('skills');
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new experience
router.post('/', async (req, res) => {
  const experience = new Experience({
    role: req.body.role,
    company: req.body.company,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    current: req.body.current,
    skills: req.body.skills
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;