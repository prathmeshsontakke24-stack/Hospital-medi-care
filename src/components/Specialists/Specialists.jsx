import "./Specialists.css";
import { useNavigate } from "react-router-dom";

function Specialists() {
  const navigate = useNavigate();
  const doctors = [
    {
      name: "Dr. John Smith",
      speciality: "Cardiologist",
    },
    {
      name: "Dr. Emma Watson",
      speciality: "Dentist",
    },
    {
      name: "Dr. David Lee",
      speciality: "Neurologist",
    },
    {
      name: "Dr. Sarah Wilson",
      speciality: "Pediatrician",
    },
  ];

  return (
    <section id="doctors" className="specialists">
      <div className="specialists-header">
        <h2>We Have The Best Specialist</h2>

        <p>
          Meet our experienced medical professionals dedicated to providing
          exceptional care.
        </p>
      </div>

      <div className="specialists-grid">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-image">👨‍⚕️</div>

            <h3>{doctor.name}</h3>

            <p>{doctor.speciality}</p>

            <button onClick={() => navigate("/appointment")}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialists;
