import React from "react";
import { useAppContext } from "../context/AppProvider";

const Footer = () => {
  const { isDarkMode } = useAppContext();
  return (
    <footer className={isDarkMode ? "footer footer--dark" : "footer"}>
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
