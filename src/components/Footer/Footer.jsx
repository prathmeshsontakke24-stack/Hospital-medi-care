import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2 className="footer-logo">MediCare</h2>

          <p>
            Providing quality healthcare services with modern technology and
            experienced specialists.
          </p>
        </div>

        

          <div>
            <h3>Company</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#doctors">Doctors</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        

        <div>
          <h3>Support</h3>

          <ul>
            <li>
              <a href="#reviews">Reviews</a>
            </li>

            <li>
              <a href="#services">Healthcare</a>
            </li>

            <li>
              <a href="#innovation">Innovation</a>
            </li>

            <li>
              <a href="#contact">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul>
            <li>
              <a href="mailto:info@medicare.com">info@medicare.com</a>
            </li>
            <li>
              <a href="tel:+919876543210">+91 9876543210</a>
            </li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">© 2026 MediCare. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
