const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const StudentService = require ('../services/studentService');
// CREATE
router.post('/students', (req, res) => {
  const { Name, Age } = req.body;
  const newStudent = new Student({ Name, Age });
  newStudent.save((err, student) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(student);
  });
});

// READ
router.get('/students/:id', (req, res) => {
  const id = req.params.id;
  Student.findById(id, (err, student) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  });
});

// UPDATE
router.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const { Name, Age } = req.body;
  Student.findByIdAndUpdate(id, { Name, Age }, { new: true }, (err, student) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  });
});

// DELETE
router.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id, (err, student) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted' });
  });
});
router.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(students);
    });
  });
 
  router.get('/student/by', (req, res) => {
    Student.find({ Age: { $gt: 18 } }, (err, docs) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(docs);
    });
  });
  router.get('/student/:age', (req, res) => {
    const agee = parseInt(req.params.age);
    Student.find({ Age: { $gte: agee } }, (err, docs) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(docs);
    });
  });
  router.get('/:name', (req, res) => {
    const name = req.params.name;
    StudentService.doesStudentExist(name, (err, exists) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json({ exists: exists,name  });
    });
  });
  
module.exports = router;
