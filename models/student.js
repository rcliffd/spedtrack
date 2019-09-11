const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    studentName: {
        type: String,
        required: true
    },
    goal1: {
        type: Text
    },
    goal2: {
        type: Text
    },
    goal3: {
        type: Text
    },
    goal4: {
        type: Text
    },
    goal5: {
        type: Text
    },
    service1: {
        type: Text
    },
    service2: {
        type: Text
    },
    service3: {
        type: Text
    },
    service4: {
        type: Text
    },
    service5: {
        type: Text
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;