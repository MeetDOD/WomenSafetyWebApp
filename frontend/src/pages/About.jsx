import React, { useEffect } from "react";
import "../styles/about.css";
import about from "../images/aboutUs.png";
import about2 from "../images/aboutUs2.png";
import "../styles/features.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="features_wrapper" style={{ marginTop: "-90px" }}>
            <div className="row">
              <div className="col-12 text-center">
                <p className="features_subtitle">Our Team for your safety</p>
                <h2 className="features_title">About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">1</p>
              <h2 className="about_title">
                Safe Siren is here for your safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
                We ensure that each and every human being reaches home to safety
                , with advance features like mail notification , mobile
                messaging and live location sharing we are the trusted bodyguard
                for you.
              </p>
              {/* <div className="my-5">
                <a className="learn-more-btn" href="#cars">
                  Enrole Now
                </a>
              </div> */}
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="innovate mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                <img decoding="async" src={about2} className="img-fluid" />
              </div>
              <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                <p className="about_number">2</p>
                <h2 className="about_title">The best reliable source</h2>
                <p className="about_text" style={{ textAlign: "justify" }}>
                  We're more than just a webapp; we're your trusted partner in
                  reaching home safe..
                </p>
                <div className="mt-5">
                  <a className="learn-more-btn btn-header" href="#brands">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
