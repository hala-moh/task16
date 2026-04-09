import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0b1e35" }} className="text-light pt-5 mt-5">

      <div className="container-fluid px-5">

        <div className="row">

         
          <div className="col-md-3 col-12 mb-4">

            <h4 className="fw-bold text-success">
              🛒 FreshCart
            </h4>

            <p className="text-white-50 small">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <p className="text-white-50 small mb-1">
              <i className="fa-solid fa-phone text-success me-2"></i>
              +1 (800) 123-4567
            </p>

            <p className="text-white-50 small mb-1">
              <i className="fa-solid fa-envelope text-success me-2"></i>
              support@freshcart.com
            </p>

            <p className="text-white-50 small">
              <i className="fa-solid fa-location-dot text-success me-2"></i>
              123 Commerce Street, New York, NY 10001
            </p>

          
            <div className="d-flex gap-3 mt-3 fs-5">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>

          </div>

   
          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">Shop</h6>
            <ul className="list-unstyled text-white-50 small">
              <li>All Products</li>
              <li>Categories</li>
              <li>Brands</li>
              <li>Electronics</li>
              <li>Men's Fashion</li>
              <li>Women's Fashion</li>
            </ul>
          </div>

     
          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled text-white-50 small">
              <li>My Account</li>
              <li>Order History</li>
              <li>Wishlist</li>
              <li>Shopping Cart</li>
              <li>Sign In</li>
              <li>Create Account</li>
            </ul>
          </div>

     
          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled text-white-50 small">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Shipping Info</li>
              <li>Returns & Refunds</li>
              <li>Track Order</li>
            </ul>
          </div>

      
          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled text-white-50 small">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

     
        <div className="d-flex justify-content-between align-items-center flex-wrap pb-3">

          <p className="text-white-50 small mb-0">
            © 2026 FreshCart. All rights reserved.
          </p>

          <div className="d-flex gap-3 fs-4">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-paypal"></i>
          </div>

        </div>

      </div>
    </footer>
  );
}