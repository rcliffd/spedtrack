const db = require("../models/district");

module.exports = {
    findAll: function(req, res) {
      db.District
        .findOne({stateName : req.params.USstate})
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