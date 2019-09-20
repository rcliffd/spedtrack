const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regStaffSchema = new Schema ({
    regStaffName: {
        type: String,
        required: true
    }
});

const RegStaff = mongoose.model("RegStaff", regStaffSchema);

module.exports = RegStaff;