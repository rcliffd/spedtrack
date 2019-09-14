const router = require("express").Router();
const studentRoutes = require("./students");
const regTeacherRoutes = require("./regedteachers")

// Book routes
router.use("/students", studentRoutes);
router.use('/reged', regTeacherRoutes);

module.exports = router;