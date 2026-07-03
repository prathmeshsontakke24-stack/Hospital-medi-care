import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <span className="hero-tag">#1 Healthcare Solution</span>

        <h1>Best Specialists</h1>

        <p>
          We provide high quality healthcare services with experienced doctors
          and modern technology.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Make Appointment
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Learn More
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>

          <div>
            <h3>12K+</h3>
            <p>Happy Patients</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Specialists</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"
          alt="doctor"
        />

        <div className="floating-card">
          <h4>24/7 Service</h4>
          <p>Always Available</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
