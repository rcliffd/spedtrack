const db = require("../models/state");

module.exports = {
    findOne: function(req, res) {
      db.State
        .findOne({ stateName : req.params.stateName})
        .populate("districts")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.State
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
  };