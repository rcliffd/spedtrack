const db = require("../models/district");

module.exports = {
    findAll: function(req, res) {
      db.District
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.District
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
  };