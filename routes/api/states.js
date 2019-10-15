const router = require("express").Router();
const statesController = require("../../controllers/statesController");

router.route("/")
  .get(statesController.findAll)

// Matches with "/api/states/:stateName"
router.route("/:stateName")
  .get(statesController.findOne);


// Matches with "/api/states/:id"
router
  .route("/:id")
  .get(statesController.findById)

module.exports = router;