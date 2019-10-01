const router = require("express").Router();
const districtsController = require("../../controllers/districtsController");

// Matches with "/api/districts/:USstate"
router.route("/:USstate")
  .get(districtsController.findAll);


// Matches with "/api/states/:id"
router
  .route("/:id")
  .get(districtsController.findById)

module.exports = router;