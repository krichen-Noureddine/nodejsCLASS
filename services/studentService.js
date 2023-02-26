var Student = require ("../models/student")
function doesStudentExist(name, callback) {
    Student.findOne({ Name: name }, (err, student) => {
      if (err) {
        return callback(err);
      }
      if (student !== null) {
        return callback(null, true);
      }
      return callback(null, false);
    });
  }
  exports.doesStudentExist=doesStudentExist