import axios from "axios";

export default {
  // Post a new student
  createStudent: function() {
    return axios.post("/api/students");
    },
  // Find student by SPED teacher
  getStudentsBySPED: function(SPEDteacher) {
    return axios.get("/api/students/" + SPEDteacher);
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