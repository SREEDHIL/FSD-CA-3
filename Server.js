const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const mongoDB = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected Successfully")
    } catch (error) {
        console.error("Unable to connect to Database", error)
    }
}

mongoDB();

app.get("/api/patients", async(req,res)=>{
    const patient = Patient(req.body);
    return res.json(patient)
});

app.post("/api/patients", async(req,res)=>{
    try {
        const patient = patient(req.body);
        await patient.save();
    } catch (error) {
        console.error(error.message)
    }
});

app.put("/api/patients/:id/doctors", async(req, res)=>{
    try {
        const doctor = Doctor(req.body);
        await Doctor.findByIdAndUpdate(doctor);
    } catch (error) {
        console.error(error.message)
    }
});

app.delete("/api/patients/:id", async(req, res)=>{
    const patient = Patient(req.body);
    await Patient.findByIdAndDelete(patient)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:5000`)
})