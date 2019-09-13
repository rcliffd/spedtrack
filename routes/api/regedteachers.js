const router = require("express").Router();
const regedController = require("../../controllers/regedController");

// Matches with "/api/reged/:id"
router
  .route("/:id")
  .put(regedController.findByIdAndUpdate)

module.exports = router;