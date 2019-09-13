const db = require("../models");

module.exports = {
    find: function(req, res) {
        db.RegStaff
          .findAll(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
  };