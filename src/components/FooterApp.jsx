import React from "react";
import "../css/footer.css";
import logo from "../assets/nerd.png";

const FooterApp = () => {
  return (
    <footer className="footer-background">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="d-flex align-items-center gap-2">
              <img className="footer-background__logo" src={logo} alt="logo" />{" "}
              <span className="text-white fs-4">Shop Geek</span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-light footer-redes">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" className="btn btn-light footer-redes">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="btn btn-light footer-redes">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
