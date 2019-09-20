const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    studentName: {
        type: String,
        required: true
    },
    SPEDteacher: {
        type: String
    },
    mathLevel: {
        type: String
    },
    readingLevel: {
        type: String
    },
    goal1: {
        type: String
    },
    goal2: {
        type: String
    },
    goal3: {
        type: String
    },
    goal4: {
        type: String
    },
    goal5: {
        type: String
    },
    service1: {
        type: String
    },
    service2: {
        type: String
    },
    service3: {
        type: String
    },
    service4: {
        type: String
    },
    service5: {
        type: String
    },
    Mon1Teacher: [{
        type: String
    }],
    Mon2Teacher: [{
        type: String
    }],
    Mon3Teacher: [{
        type: String
    }],
    Mon4Teacher: [{
        type: String
    }],
    Mon5Teacher: [{
        type: String
    }],
    Mon6Teacher: [{
        type: String
    }],
    Mon7Teacher: [{
        type: String
    }],
    Mon8Teacher: [{
        type: String
    }],
    Mon9Teacher: [{
        type: String
    }],
    Tues1Teacher: [{
        type: String
    }],
    Tues2Teacher: [{
        type: String
    }],
    Tues3Teacher: [{
        type: String
    }],
    Tues4Teacher: [{
        type: String
    }],
    Tues5Teacher: [{
        type: String
    }],
    Tues6Teacher: [{
        type: String
    }],
    Tues7Teacher: [{
        type: String
    }],
    Tues8Teacher: [{
        type: String
    }],
    Tues9Teacher: [{
        type: String
    }],
    Wed1Teacher: [{
        type: String
    }],
    Wed2Teacher: [{
        type: String
    }],
    Wed3Teacher: [{
        type: String
    }],
    Wed4Teacher: [{
        type: String
    }],
    Wed5Teacher: [{
        type: String
    }],
    Wed6Teacher: [{
        type: String
    }],
    Wed7Teacher: [{
        type: String
    }],
    Wed8Teacher: [{
        type: String
    }],
    Wed9Teacher: [{
        type: String
    }],    
    Thur1Teacher: [{
        type: String
    }],
    Thur2Teacher: [{
        type: String
    }],
    Thur3Teacher: [{
        type: String
    }],
    Thur4Teacher: [{
        type: String
    }],
    Thur5Teacher: [{
        type: String
    }],
    Thur6Teacher: [{
        type: String
    }],
    Thur7Teacher: [{
        type: String
    }],
    Thur8Teacher: [{
        type: String
    }],
    Thur9Teacher: [{
        type: String
    }],
    Fri1Teacher: [{
        type: String
    }],
    Fri2Teacher: [{
        type: String
    }],
    Fri3Teacher: [{
        type: String
    }],
    Fri4Teacher: [{
        type: String
    }],
    Fri5Teacher: [{
        type: String
    }],
    Fri6Teacher: [{
        type: String
    }],
    Fri7Teacher: [{
        type: String
    }],
    Fri8Teacher: [{
        type: String
    }],
    Fri9Teacher: [{
        type: String
    }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;