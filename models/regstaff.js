const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regStaffSchema = new Schema ({
    regStaffName: {
        type: String,
        required: true
    },
    Mon1Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon2Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon3Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon4Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon5Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon6Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon7Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon8Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Mon9Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues1Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues2Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues3Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues4Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues5Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues6Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues7Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues8Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Tues9Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed1Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed2Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed3Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed4Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed5Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed6Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed7Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed8Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Wed9Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],    
    Thur1Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur2Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur3Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur4Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur5Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur6Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur7Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur8Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Thur9Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri1Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri2Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri3Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri4Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri5Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri6Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri7Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri8Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
    Fri9Students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }],
});

const RegStaff = mongoose.model("RegStaff", regStaffSchema);

module.exports = RegStaff;