import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Emergency.css";
import { PiSirenBold } from "react-icons/pi";
import { useEffect } from "react";
import Parallelx from "../Components/Parallelx";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";


const Emergency = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    try {
      console.log(lat);
      console.log(long);
      const payload = {
        userId: auth?.user._id,
        lat,
        long,
      };
      console.log(payload);
      const res = await fetch(
        "https://womensecbackend.onrender.com/api/v1/emergency/emergencypressed",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-type": "application/json" },
        }
      );
      if (res.status === 200) {
        toast.success("SOS SENT SUCCESSFULLY");
      } else {
        toast.error("SOS FAILED");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => getLocation(), []);

  const showPosition = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLat(latitude);
    setLong(longitude);

    // handleSubmit();
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="heightRes">
        <section className="banner_wrapper">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-12 my-5 my-md-0 text-center text-md-start">
                <p className="banner-subtitle" style={{ textAlign: "center" }}>
                  Your Safety our Priority
                </p>
                <h1
                  className="banner-title mb-5"
                  style={{ textAlign: "center" }}
                >
                  Help us bring <span>Women Safety</span> to Reality with us
                </h1>
                <center>
                  <button
                    class="button-30 text-center"
                    onClick={handleSubmit}
                    role="button"
                  >
                    <PiSirenBold size={200} className="text-white" />
                  </button>
                </center>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Parallelx />
      <Footer />
    </>
  );
};

export default Emergency;