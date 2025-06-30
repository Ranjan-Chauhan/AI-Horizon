import React from "react";
import "../../css/HomeLast.css";
import {GiSpinningTop} from "react-icons/gi";
import ailogo from "../../assets/ailogo.png";
import {Map, Marker} from "@vis.gl/react-google-maps";
import {FaLinkedin} from "react-icons/fa6";

const HomeLast = () => {
    const center = {lat: 19.1139043, lng: 72.9181878};
    const [currentPage, setCurrentPage] = useState('Home');

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
                <GiSpinningTop className="breadcrumb-icon"/>
                <span className="breadcrumb-text">> AI Horizons > {currentPage}</span>
            </div>

            <div className="quick-links-title">Quick Links</div>

            <div className="links-grid">
                <div className="links-column">
                    <h3 className="column-title">Company</h3>
                    <ul className="links-list">
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('About us');
                        }}>About us</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Partner');
                        }}>Partner</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Strategic Investor');
                        }}>Strategic Investor</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Leadership');
                        }}>Leadership</a></li>
                    </ul>
                </div>
                <div className="links-column">
                    <h3 className="column-title">Resources</h3>
                    <ul className="links-list">
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Blogs');
                        }}>Blogs</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Case Studies');
                        }}>Case Studies</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Comparisons');
                        }}>Comparisons</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Industries');
                        }}>Industries</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('User Cases');
                        }}>User Cases</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Newsrooms');
                        }}>Newsrooms</a></li>
                    </ul>
                </div>
                <div className="links-column">
                    <h3 className="column-title">Platform</h3>
                    <ul className="links-list">
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Career');
                        }}>Career</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Solutions');
                        }}>Solutions</a></li>
                        <li><a href="" onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('Enterprises');
                        }}>Enterprises</a></li>
                    </ul>
                </div>
            </div>

            <div className="logo-container">
                <img src={ailogo} alt="AI Logo" className="ai-logo"/>
            </div>
            <div
                className="map-container"
                onClick={() =>
                    window.open(
                        "https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7ea348f1cd3:0x9f0d02f9fba7f991!8m2!3d19.1139043!4d72.9181878!16s%2Fg%2F11bw3fnc5q?entry=ttu",
                        "_blank"
                    )
                }
            >
                {/* ✅ Wrap Map with ApiProvider */}
                <ApiProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <Map
                        defaultZoom={13}
                        defaultCenter={center}
                        gestureHandling="greedy"
                        disableDefaultUI
                        style={{width: "100%", height: "300px"}}
                    >
                        <Marker position={center}/>
                    </Map>
                </ApiProvider>
            </div>
            {/*
      <div
        className="map-container"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7ea348f1cd3:0x9f0d02f9fba7f991!8m2!3d19.1139043!4d72.9181878!16s%2Fg%2F11bw3fnc5q?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
            +"_blank"
          )
        }
      >
        <Map
          defaultZoom={13}
          defaultCenter={center}
          gestureHandling="greedy"
          disableDefaultUI
        >
          <Marker position={center} />
        </Map>
      </div> */}

            <div className="contact-section">
                <h3 className="contact-title">Contact</h3>
                <p className="contact-address">
                    1306-07, C wing, Kailas Business Park, HMPL
                    <br/>
                    Surya Nagar, Vikhroli West, Mumbai,
                    <br/>
                    Maharashtra 400079
                </p>
                <FaLinkedin className="linkedin-icon"/>
            </div>

            <div className="footer-bottom-text">
                <a href="/privacy" className="footer-link">
                    Privacy Policy
                </a>{" "}
                |
                <a href="/terms" className="footer-link">
                    {" "}
                    Terms and Conditions
                </a>{" "}
                | India
            </div>
        </footer>
    );
};

export default HomeLast;
