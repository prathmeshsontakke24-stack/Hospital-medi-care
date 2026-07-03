import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="logo">
        Medi<span>Care</span>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#innovation">Innovation</a>
          </li>

          <li>
            <a href="#doctors">Doctors</a>
          </li>

          <li>
            <a href="#reviews">Reviews</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="login-btn" onClick={() => navigate("/appointment")}>
        Book Appointment
      </button>
    </header>
  );
}

export default Navbar;
