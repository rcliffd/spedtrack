const router = require("express").Router();
const statesController = require("../../controllers/statesController");

// Matches with "/api/states"
router.route("/")
  .get(statesController.findAll);


// Matches with "/api/states/:id"
router
  .route("/:id")
  .get(statesController.findById)

module.exports = router;