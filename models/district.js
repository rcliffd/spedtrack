const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtSchema = new Schema ({
    districtName: {
        type: String,
        required: true
    },
    schools: [{
        type: Schema.Types.ObjectId,
        ref: "School"
    }]
});

const District = mongoose.model("District", districtSchema);

module.exports = District;