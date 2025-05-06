const express = require('express');
const router = express.Router();
const Project = require('../Model/Project');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('skills');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('skills');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new project
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    ProjectUrl: req.body.projectUrl,
    gitHubUrl: req.body.githubUrl,
    featured: req.body.featured,
    skills: req.body.skills
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;