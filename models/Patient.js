const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name:String,
    age:Number,
    ailment:String,
    doctor:[{type:mongoose.Schema.Types.ObjectId, ref:"Doctor", default: null}]
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = {Patient}