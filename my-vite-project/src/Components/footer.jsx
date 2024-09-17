import React from "react";
//import './Header.css'; // Include the updated CSS for positioning

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 footer-links">
            <h5>COMPANY NAME</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 footer-links">
            <h5>PRODUCTS</h5>
            <ul>
              <li><a href="#">MDBootstrap</a></li>
              <li><a href="#">MDWordPress</a></li>
              <li><a href="#">BrandFlow</a></li>
              <li><a href="#">Bootstrap Angular</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-links">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="col-md-3 contact-info">
            <h5>CONTACT</h5>
            <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
            <p><i className="fas fa-phone"></i> +01 234 567 88</p>
            <p><i className="fas fa-print"></i> +01 234 567 89</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="footer-span"> 
        <span >© 2020 Copyright: <a href="#">Ashish Tayade</a></span></div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
