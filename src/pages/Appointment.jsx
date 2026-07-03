import { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const doctors = [
    "Dr. John Smith",
    "Dr. Emma Watson",
    "Dr. David Lee",
    "Dr. Sarah Wilson",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: doctors[0],
    date: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      doctor: doctors[0],
      date: "",
    });
  };

  return (
    <div className="appointment-container">

      <div className="appointment-card">

        <h1>Book Appointment</h1>

        <p>
          Schedule an appointment with
          our specialist doctors.
        </p>

        {!success ? (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
            >
              {doctors.map((doctor) => (
                <option
                  key={doctor}
                  value={doctor}
                >
                  {doctor}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Confirm Appointment
            </button>

          </form>
        ) : (
          <div className="success-box">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Appointment Confirmed!
            </h2>

            <p>
              Your appointment has been
              successfully booked.
            </p>

            <button
              onClick={() =>
                setSuccess(false)
              }
            >
              Book Another
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Appointment;