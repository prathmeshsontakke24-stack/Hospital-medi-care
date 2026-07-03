import "./Services.css";

function Services() {
  const services = [
    {
      title: "Dentistry",
      description:
        "Expert dental care for healthy and beautiful smiles.",
      icon: "🦷",
    },
    {
      title: "Pulmonary",
      description:
        "Advanced treatment for respiratory and lung conditions.",
      icon: "🫁",
    },
    {
      title: "Neurology",
      description:
        "Comprehensive neurological diagnosis and care.",
      icon: "🧠",
    },
    {
      title: "Pediatrics",
      description:
        "Dedicated healthcare services for children.",
      icon: "👶",
    },
  ];

  return (
    <section id="services" className="services">

      <div className="services-header">
        <h2>Our Services</h2>

        <p>
          We provide a wide range of
          healthcare services for every
          stage of life.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;