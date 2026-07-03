import "./Innovation.css";
import clinicDoctor from "../../assets/images/clinicDoctor.png";

function Innovation() {
  return (
    <section id="innovation" className="innovation">
      <div className="innovation-image">
        <img src={clinicDoctor} alt="doctor" />
      </div>

      <div className="innovation-content">
        <span className="innovation-tag">Why Choose Us</span>

        <h2>Clinic With Innovation</h2>

        <p>
          We combine modern technology, experienced specialists and
          compassionate care to provide the best healthcare experience.
        </p>

        <div className="innovation-list">
          <div className="feature">✔ Qualified Doctors</div>

          <div className="feature">✔ Modern Equipment</div>

          <div className="feature">✔ Emergency Support</div>

          <div className="feature">✔ Online Consultation</div>
        </div>

        <button
          className="innovation-btn"
          onClick={() =>
            document.getElementById("doctors").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Innovation;
