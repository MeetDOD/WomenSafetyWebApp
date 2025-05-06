import React, { useEffect } from "react";
import "../styles/about.css";
import about from "../images/aboutUs.png";
import about2 from "../images/aboutUs2.png";
import "../styles/features.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const AboutUs2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
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
                Welcome to Safe Siren Empowering Women, Ensuring Safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
                At Safe Siren, we are dedicated to creating a safer world for
                women. Our journey began with a simple yet powerful idea - to
                provide women with a tool that empowers them to feel secure and
                confident in any situation. We understand the unique challenges
                that women face, and we are committed to using technology to
                address them head-on.
              </p>
              {/* <div className="my-5">
                <Link to="/" className="learn-more-btn">
                  Safe Siren
                </Link>
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
                <h2 className="about_title">Why Safe Siren?</h2>
                <p className="about_text" style={{ textAlign: "justify" }}>
                  Safety in Your Hands: We put safety in your hands with a
                  user-friendly mobile application that is designed to be your
                  personal guardian. Whether you're walking alone at night,
                  traveling to a new city, or just want to ensure your safety,
                  our app is here for you.
                  <br />
                  Real-time Alerts: Our app offers real-time location sharing
                  and emergency alert features, allowing you to instantly notify
                  your trusted contacts and authorities in case of an emergency.
                </p>
                <div className="mt-5">
                  <Link to="/contact" className="learn-more-btn btn-header">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs2;
