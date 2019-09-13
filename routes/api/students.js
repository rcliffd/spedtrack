const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router
  .route("/")
  .post(studentsController.create)

// Matches with "/api/students/:SPEDteacher"
router
  .route("/:SPEDteacher")
  .get(studentsController.find);


// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.delete)


module.exports = router;