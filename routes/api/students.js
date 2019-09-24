const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router
  .route("/")
  .post(studentsController.create)
  .get(studentsController.findAll)

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

router
  .route("/:DayBlockTeacher/:TeacherName")
  .get(studentsController.findByDayAndBlockTeacher)

module.exports = router;