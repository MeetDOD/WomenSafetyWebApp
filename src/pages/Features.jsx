import React from "react";
import "../styles/features.css";
import "../styles/features.css";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";

const Features = () => {
  return (
    <div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">Feature-Packed Driving</p>
              <h2 className="features_title">Our automated features</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={search} width={150} />
                <h3 className="mt-4">Emergency Mail Alert</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  We take your security seriously, and that's why we've
                  implemented Mailing systems. Your information is safeguarded
                  with the latest encryption technology, ensuring your Safety
                  and security.Allowing users to track loved ones!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={puzzle} width={150} />
                <h3 className="mt-4">Emergency Service support</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Get ready to explore every angle, every detail, and every
                  curve of Secuity. Get email and mobile notification when
                  person is in danger by just one tap and all SOS will be sent
                  with locations with precise locations{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={statis} width={150} />
                <h3 className="mt-4">Incident Reporting</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  We take your Community seriously, and that's why we've
                  implemented Incident reporting for community. Your detail and
                  information is safeguarded with the latest encryption
                  technology, ensuring your details to be private.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={noti} width={150} />
                <h3 className="mt-4">Live location </h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  With the help of latest technology and devices available
                  widely in market we use live location to track the victim and
                  safeguard her form the unnecessary threats and keep them safe.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={rock} width={150} />
                <h3 className="mt-4">Emergency Chat</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  When there is emergency you need help in every way possbile
                  our operators connected with goverment offcials will connect
                  you and help you get of that unnecessary situation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={proct} width={150} />
                <h3 className="mt-4">Mail services</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Get email to explore every angle, every detail, and every
                  curve of your the app with the mail services they prompt when
                  your nearby ones are in danger or the loved ones are in danger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
