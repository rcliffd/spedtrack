const db = require("../models");

module.exports = {
    update: function(req, res) {
        db.RegStaff
          .findByIdAndUpdate(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
  };