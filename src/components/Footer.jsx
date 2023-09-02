import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center-container footer--center">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Brian Gakure portfolio
        </p>
        <p className="footer__text">njaagagakure@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
