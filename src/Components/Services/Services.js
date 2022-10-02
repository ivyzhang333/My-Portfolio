import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            delectus ipsa cumque molestiae! Officia optio iusto perspiciatis
            nostrum nam ut, cupiditate at illo laboriosam atque, officiis nulla
            repellendus, minima vitae?
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Fullstack Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda consequatur blanditiis odit soluta omnis nemo, vel
                eveniet officiis provident! Provident rem sunt, nam nisi omnis
                ea explicabo repellendus! Ab, totam.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-laptop"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda consequatur blanditiis odit soluta omnis nemo, vel
                eveniet officiis provident! Provident rem sunt, nam nisi omnis
                ea explicabo repellendus! Ab, totam.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-mobile"></i>
            <div className="item-desc">
              <h3>Mobile Development</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda consequatur blanditiis odit soluta omnis nemo, vel
                eveniet officiis provident! Provident rem sunt, nam nisi omnis
                ea explicabo repellendus! Ab, totam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
