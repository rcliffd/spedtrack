const Student = require("../models/student");

module.exports = {
    find: function(req, res) {
      Student
        .find(req.params.SPEDteacher)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
      Student
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        Student
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        Student
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        Student
          .findByIdAndUpdate(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        Student
          .findByIdAndRemove(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findByDayAndBlockTeacher: function(req, res) {
        const DayBlockTeacher = req.params.DayBlockTeacher
        const TeacherName = req.params.TeacherName;
        Student
          .find({[DayBlockTeacher]:TeacherName})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }

  };