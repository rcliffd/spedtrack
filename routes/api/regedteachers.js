const router = require("express").Router();
const regedController = require("../../controllers/regedController");

// Matches with "/api/reged"
router
  .route("/")
  .put(regedController.find)

module.exports = router;