import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Successfully subscribed!");
    setEmail("");
  };

  return (
    <section id="contact" className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe To Our Newsletter</h2>

        <p>
          Get healthcare tips, updates,
          and special offers directly in
          your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>

        {message && (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;