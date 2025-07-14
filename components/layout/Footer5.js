import React, { useState } from "react";
import Link from "next/link";
import SocialLinks from "../elements/SocialLinks";
import ServicesList from "../elements/ServicesList";

function Footer5() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Clear error & show loading
    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess("Thanks for subscribing!");
      setEmail("");

      // Clear success message after 3 sec
      setTimeout(() => setSuccess(""), 3000);
    }, 1500);
  };
  return (
    <>
      <footer className="footer-eleven-area">
        <div className="container">
          <div className="footer-eleven__wrp mt-60">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="footer-eleven-left">
                  <Link href="/" className="logo">
                    <img src="/assets/images/logo/Logo PNG.png" alt="logo" />
                  </Link>
                  <p className="mt-20 text">
                    Make your idea into reality with IPAT
                  </p>
                  <div className="input">
                    <form onSubmit={handleSubmit}>
                      {/* <span>
                                            <i className="fa-light fa-envelope" aria-hidden="true" />
                                            <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                                        </span> */}
                      <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" disabled={loading}>
                        <i
                          className="fa-sharp fa-solid fa-paper-plane"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Submit</span>
                      </button>
                    </form>

                    {/* Show error */}
                    {error && (
                      <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
                    )}

                    {/* Show success */}
                    {success && (
                      <p style={{ color: "green", marginTop: "5px" }}>
                        {success}
                      </p>
                    )}

                    {/* Show loading */}
                    {loading && (
                      <p style={{ color: "blue", marginTop: "5px" }}>
                        Sending...
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="footer-eleven-righ mb-60">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="footer-eleven__item">
                        <h5 className="title">Contact Us</h5>
                        <ul>
                          <li>
                            <Link href="/">info@ipat-solutions.com</Link>
                          </li>
                          {/* <li>
                            <Link href="/">+1 234 5644 5698</Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="footer-eleven__item">
                        <h5 className="title">Our Address</h5>
                        <ul>
                          <li>
                            <strong>India: </strong>
                            <br />
                             Cannaught Palace, Delhi, India
                          </li>
                          <li style={{ marginTop: "10px" }}>
                            <strong>US: </strong>
                            <br />
                             Bridgeport, Chicago, USA
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer-eleven__item">
                        <h5 className="title">Our Social</h5>
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                  <div className="footer-eleven-bottom">
                    <Link href="/">Terms and Condition</Link>
                    <Link href="/">Privacy Policy</Link>
                    <p>
                      © 2025<Link href="/">Theme Mascot</Link>, All Rights
                      Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer5;
