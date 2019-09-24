import axios from "axios";

export default {
  getStudents: function(data) {
    return axios.get("/api/students")
  },
  // Post a new student
  createStudent: function(data) {
    return axios.post("/api/students", data);
    },
  // Find student by SPED teacher
  getStudentsBySPED: function(SPEDteacher) {
    return axios.get("/api/students/" + SPEDteacher);
    },
  // Get students by day, hour, and teacher, for Blockcard components
  getStudentsByDayAndHour: function(DayBlockTeacher, TeacherName) {
    return axios.get("/api/students/" + DayBlockTeacher + "/" + TeacherName)
    },
  // Deletes a student by ID number
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
    },
  // Update student info
  updateStudent: function(id) {
    return axios.put("/api/students/" + id);
    },
  getTeachers: function() {
    return axios.get("/api/reged")
    }
};