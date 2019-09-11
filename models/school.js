const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema ({
    schoolName: {
        type: String,
        required: true
    },
    spedStaff: [{
        type: Schema.Types.ObjectId,
        ref: "SPEDStaff"
    }],
    regStaff: [{
        type: Schema.Types.ObjectId,
        ref: "REGStaff"
    }]
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;