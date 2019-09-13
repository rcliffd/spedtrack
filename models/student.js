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
    },
    Mon1Students: [{
        type: String
    }],
    Mon2Students: [{
        type: String
    }],
    Mon3Students: [{
        type: String
    }],
    Mon4Students: [{
        type: String
    }],
    Mon5Students: [{
        type: String
    }],
    Mon6Students: [{
        type: String
    }],
    Mon7Students: [{
        type: String
    }],
    Mon8Students: [{
        type: String
    }],
    Mon9Students: [{
        type: String
    }],
    Tues1Students: [{
        type: String
    }],
    Tues2Students: [{
        type: String
    }],
    Tues3Students: [{
        type: String
    }],
    Tues4Students: [{
        type: String
    }],
    Tues5Students: [{
        type: String
    }],
    Tues6Students: [{
        type: String
    }],
    Tues7Students: [{
        type: String
    }],
    Tues8Students: [{
        type: String
    }],
    Tues9Students: [{
        type: String
    }],
    Wed1Students: [{
        type: String
    }],
    Wed2Students: [{
        type: String
    }],
    Wed3Students: [{
        type: String
    }],
    Wed4Students: [{
        type: String
    }],
    Wed5Students: [{
        type: String
    }],
    Wed6Students: [{
        type: String
    }],
    Wed7Students: [{
        type: String
    }],
    Wed8Students: [{
        type: String
    }],
    Wed9Students: [{
        type: String
    }],    
    Thur1Students: [{
        type: String
    }],
    Thur2Students: [{
        type: String
    }],
    Thur3Students: [{
        type: String
    }],
    Thur4Students: [{
        type: String
    }],
    Thur5Students: [{
        type: String
    }],
    Thur6Students: [{
        type: String
    }],
    Thur7Students: [{
        type: String
    }],
    Thur8Students: [{
        type: String
    }],
    Thur9Students: [{
        type: String
    }],
    Fri1Students: [{
        type: String
    }],
    Fri2Students: [{
        type: String
    }],
    Fri3Students: [{
        type: String
    }],
    Fri4Students: [{
        type: String
    }],
    Fri5Students: [{
        type: String
    }],
    Fri6Students: [{
        type: String
    }],
    Fri7Students: [{
        type: String
    }],
    Fri8Students: [{
        type: String
    }],
    Fri9Students: [{
        type: String
    }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;