const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const dotenv = require("dotenv");
dotenv.config()

const MONGO_URI = process.env.MONGO_URI;

const mongoDB = async()=>{
    try {
        mongoose.connect(MONGO_URI)
        console.log("Connected Successfully")
    } catch (error) {
        console.error("Unable to connect to Database", error)
    }
}

mongoDB();

const doctor = [
    {
        "name":"Dr. John Doe",
        "specialization":"Cardiologist"
    },
    {
        "name":"Dr. Emily Smith",
        "specializtion":"Dermatologist"
    }
]

const patient = [
    {
        "name":"Alice Brown",
        "age":30,
        "aliment":"Heart Disease",
        "doctor": null
    },
    {
        "name":"Bob White",
        "age":25,
        "aliment":"Skin Allergy",
        "doctor": null
    }
]


async function seedData(){
    await Doctor.insertMany(doctor);
    await Patient.insertMany(patient);
    await seedData.save();
}

seedData();