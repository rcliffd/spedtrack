const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spedStaffSchema = new Schema ({
    spedStaffName: {
        type: String,
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }]
});

const SPEDstaff = mongoose.model("SPEDstaff", spedStaffSchema);

module.exports = SPEDstaff;