const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router
  .route("/")
  .post(studentsController.create)
  .get(studentsController.findAll)

// Matches with "/api/students/:id"
router
  .route("/test/:id")
  .get(studentsController.findStudent)
  .put(studentsController.update)
  .delete(studentsController.delete)

  // Matches with "/api/students/:SPEDteacher"
router
  .route("/:SPEDteacher")
  .get(studentsController.find);


router
  .route("/:DayBlockTeacher/:TeacherName")
  .get(studentsController.findByDayAndBlockTeacher)

module.exports = router;