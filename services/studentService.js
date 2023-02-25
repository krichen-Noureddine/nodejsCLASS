var Student = require('../models/student');


const findByName = (req, res)=>{
    Student.findOne({Name: req.params.name}, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
        });
}
const checkName = (req, res) => {
    Student.find({Name: req.body.Name}, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            if (student.length > 0) {
                res.json('Student name already used');
            } }}    )};
const createStudent = (req, res) =>    new Student ({
    Name: req.body.Name,
    Age: req.body.Age
}).save((err, newContact) => {
    if (err) {
        console.log("Error message: "+err);
    } else {
        console.log(newContact);
        res.json('Student added successfully id: '+newContact._id);
    }
});
const findAll = (req, res) => {
    Student.find((err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
     });
}
const deleteById = (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.json('Student deleted successfully');
        }
    });
}
const findById =  (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    });
}
exports.findByName = findByName;
exports.checkName = checkName;
exports.createStudent = createStudent;
exports.findAll = findAll;
exports.deleteById = deleteById;
exports.findById = findById;
