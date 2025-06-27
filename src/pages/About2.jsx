import React from 'react';
import { BsGraphUpArrow, BsFillPersonFill } from "react-icons/bs";
import '../css/About2.css';

const About2 = () => {
    return (
        <div className="about2-container">
            <div className="content-wrapper">
                <h1 className="main-title">Core Values</h1>

                <p className="description2">
                    we have many songs and stories to tell just be with us we have many
                    songs and stories to tell just be with us we have many songs and stories
                    to tell just be with us
                </p>

                <div className="core-values-grid">
                    <div className="core-value-item">
                        <div className="icon-container">
                            <BsGraphUpArrow className="icon" />
                        </div>
                        <h3 className="value-title">Core Values</h3>
                        <p className="value-description">
                            we have many songs and stories to tell just be with us we
                            have many songs and stories to tell
                        </p>
                    </div>

                    <div className="core-value-item">
                        <div className="icon-container">
                            <BsFillPersonFill className="icon" />
                        </div>
                        <h3 className="value-title">Core Values</h3>
                        <p className="value-description">
                            we have many songs and stories to tell just be with us we
                            have many songs and stories to tell
                        </p>
                    </div>

                    <div className="core-value-item">
                        <div className="icon-container">
                            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                            </svg>
                        </div>
                        <h3 className="value-title">Core Values</h3>
                        <p className="value-description">
                            we have many songs and stories to tell just be with us we
                            have many songs and stories to tell
                        </p>
                    </div>

                    <div className="core-value-item">
                        <div className="icon-container">
                            <BsFillPersonFill className="icon" />
                        </div>
                        <h3 className="value-title">Core Values</h3>
                        <p className="value-description">
                            we have many songs and stories to tell just be with us we
                            have many songs and stories to tell
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About2;