const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema ({
    stateName: {
        type: String,
        required: true
    },
    districts: [{
        type: Schema.Types.ObjectId,
        ref: "District"
      }]
});

const State = mongoose.model("State", stateSchema);

module.exports = State;