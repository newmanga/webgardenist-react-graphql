import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We are a small shop dedicated to selecting nature-inspired products, 
                based in the United States. Our designs are thoughtfully crafted to 
                evoke a sense of comfort, joy, and a deep appreciation for the natural 
                world. We prioritize quality and customer satisfaction, 
                ensuring that each product we offer is both beautiful and functional.</p>
            </div>
            <div className="col-md-4">
              <h5>Customer Service</h5>
              <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Returns</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="social-icons">
                <li><a href="https://www.etsy.com/shop/KindGardenist?ref=profile_header"><i className="fab fa-etsy"></i></a></li>
                <li><a href="https://www.instagram.com/kindgardenist/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.tiktok.com/@kindgardenist?lang=en"><i className="fab fa-tiktok"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100086774881220"><i className="fab fa-facebook-f"></i></a></li>
            </ul>
            </div>
          </div>
          <div className="row copyright-info">
            <div className="col-md-12">
              <p>&copy; 2024 Kind Gardenist. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;