const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");

// Matches with "/api/schools"
router.route("/")
  .get(schoolsController.findAll);


// Matches with "/api/schools/:id"
router
  .route("/:id")
  .get(schoolsController.findById)

module.exports = router;