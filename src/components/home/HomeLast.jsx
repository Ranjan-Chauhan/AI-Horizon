import React, { useState } from "react";
import "../../css/HomeLast.css";
import { GiSpinningTop } from "react-icons/gi";
import ailogo from "../../assets/ailogo.png";
import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import { FaLinkedin } from "react-icons/fa6";

const HomeLast = ({ apiKey }) => {
  const center = { lat: 19.1139043, lng: 72.9181878 };
  const [currentPage, setCurrentPage] = useState("Home");

  const handleLinkClick = (linkName) => {
    setCurrentPage(linkName);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="email-container">
          <span className="email-placeholder">Enter your Email ID</span>
          <button className="submit-button">Submit</button>
        </div>
        <h2 className="footer-title">Build your own private GenAI Now!</h2>
      </div>

      <div className="breadcrumb-section">
        <GiSpinningTop className="breadcrumb-icon" />
        <span className="breadcrumb-text">AI Horizons {currentPage}</span>
      </div>

      <div className="quick-links-title">Quick Links</div>

      <div className="links-grid">
        {/* Column 1: Company */}
        <div className="links-column">
          <h3 className="column-title">Company</h3>
          <ul className="links-list">
            {["About us", "Partner", "Strategic Investor", "Leadership"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div className="links-column">
          <h3 className="column-title">Resources</h3>
          <ul className="links-list">
            {[
              "Blogs",
              "Case Studies",
              "Comparisons",
              "Industries",
              "User Cases",
              "Newsrooms",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Platform */}
        <div className="links-column">
          <h3 className="column-title">Platform</h3>
          <ul className="links-list">
            {["Career", "Solutions", "Enterprises"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="logo-container">
        <img src={ailogo} alt="AI Logo" className="ai-logo" />
      </div>

      {/* Google Map */}
      <div
        className="map-container"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <APIProvider apiKey={apiKey}>
          <Map
            defaultZoom={13}
            defaultCenter={center}
            gestureHandling="greedy"
            disableDefaultUI
            style={{ width: "100%", height: "300px" }}
          >
            <Marker position={center} />
          </Map>
        </APIProvider>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3 className="contact-title">Contact</h3>
        <p className="contact-address">
          1306-07, C wing, Kailas Business Park, HMPL
          <br />
          Surya Nagar, Vikhroli West, Mumbai,
          <br />
          Maharashtra 400079
        </p>
        <FaLinkedin className="linkedin-icon" />
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom-text">
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" className="footer-link">
          Terms and Conditions
        </a>{" "}
        | India
      </div>
    </footer>
  );
};

export default HomeLast;
