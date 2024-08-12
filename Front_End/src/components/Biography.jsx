import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Eternal Wellness Medical Institute is a state-of-the-art facility committed 
            to delivering outstanding healthcare services. Our skilled professionals 
            utilize advanced medical technology to provide top-tier care. We emphasize 
            holistic well-being, offering customized treatments and support to 
            improve the health and quality of life for our patients.
          </p>
          <p>
            We believe that every person deserves to live a healthy, fulfilling life. We
            are committed to creating a safe, supportive, and caring community where
            everyone feels heard, understood, and valued. Our mission is to create a
            safe, supportive, and caring environment where every patient feels heard,
            understood, and valued. We strive to provide a welcoming, inclusive, and
            empathetic environment for all our patients, and to empower them to make
            informed decisions about their health and well-being.
          </p>
          <p>
            Eternal Wellness Medical Institute is dedicated to creating a safe, supportive, and
            caring community where everyone feels heard, understood, and valued. We strive
            to provide a welcoming, inclusive, and empathetic environment for all our
            patients, and to empower them to make informed decisions about their health
            and well-being.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;