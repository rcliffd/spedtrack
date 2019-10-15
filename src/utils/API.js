import axios from "axios";

export default {
  getDatabaseStates: function() {
    return axios.get("/api/states")
  },
  getStateDistricts: function(stateName) {
    return axios.get("/api/states/" + stateName)
  },
  getStudents: function() {
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
  getStudentById: function(id) {
    return axios.get("/api/students/test/" + id);
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