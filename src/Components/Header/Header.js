import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.png";

const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hi! I'm</h1>
        <h2 className="fullname">Wei Zhang</h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full-stack Developer 👩🏻‍💻",
              2000,
              "Frontend Developer 🌈",
              2000,
              "Backend Developer 🎖",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          corporis tempora. Id maxime recusandae commodi reprehenderit porro
          quisquam natus aliquid fuga deserunt explicabo fugit, consequatur et
          doloremque itaque aliquam quasi!
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-apple-pay"></i>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        {/* <div className="circle-1"></div>
        <div className="circle-2"></div> */}
      </div>
    </div>
  );
};

export default Header;
