import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [patients, setPatient] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/patients")
    .then(res => setPatient(res.data))
    .catch(err => console.error(err))
  })

  return (
    <>
      <h2>Hospital Management System</h2>
      {patients.map((patient)=>(
        <ul key={id._patientId}>
          <li>{patient.name}</li>
          <li>{patient.age}</li>
          <li>{patient.ailment}</li>
          <li>{patient.doctor}</li>
        </ul>
      ))}
    </>
  )
}

export default App
