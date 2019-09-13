const router = require("express").Router();
const districtsController = require("../../controllers/districtsController");

// Matches with "/api/states"
router.route("/")
  .get(districtsController.findAll);


// Matches with "/api/states/:id"
router
  .route("/:id")
  .get(districtsController.findById)

module.exports = router;