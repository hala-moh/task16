import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        formData
      );

      alert("Account created successfully ✅");

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error ❌");
    }
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">

    
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">
            Welcome to <span className="text-success">FreshCart</span>
          </h2>

          <p className="text-muted mb-4">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>

       
          <div className="mb-4">
            <div className="d-flex align-items-start mb-3">
              <div className="me-3 bg-success bg-opacity-10 rounded-circle p-2">⭐</div>
              <div>
                <h6 className="fw-bold mb-0">Premium Quality</h6>
                <small className="text-muted">Premium quality products sourced from trusted suppliers.</small>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div className="me-3 bg-success bg-opacity-10 rounded-circle p-2">🚚</div>
              <div>
                <h6 className="fw-bold mb-0">Fast Delivery</h6>
                <small className="text-muted">Same-day delivery available in most areas</small>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="me-3 bg-success bg-opacity-10 rounded-circle p-2">🔒</div>
              <div>
                <h6 className="fw-bold mb-0">Secure Shopping</h6>
                <small className="text-muted">Your data and payments are completely secure</small>
              </div>
            </div>
          </div>

       
          <div className="border rounded p-3 bg-light">
            <div className="d-flex align-items-center mb-2">
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center me-2"
                style={{ width: "35px", height: "35px" }}
              >
                S
              </div>
              <div>
                <h6 className="mb-0">Sarah Johnson</h6>
                <small className="text-warning">★★★★★</small>
              </div>
            </div>
            <small className="text-muted">
              "FreshCart has transformed my shopping experience. Highly recommend!"
            </small>
          </div>
        </div>

      
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-white">

            <h4 className="fw-bold mb-1">Create Your Account</h4>
            <p className="text-muted small mb-3">
              Start your fresh journey with us today
            </p>

    
            <div className="d-flex gap-2 mb-3">
              <button type="button" className="btn border w-50 rounded-pill">🔴 Google</button>
              <button type="button" className="btn border w-50 rounded-pill">🔵 Facebook</button>
            </div>

            <p className="text-center text-muted small">or</p>

          
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <input
                type="password"
                name="rePassword"
                placeholder="Confirm password"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="+123 456 7890"
                className="form-control mb-3 rounded-pill"
                onChange={handleChange}
              />

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label small">
                  I agree to Terms & Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 rounded-pill"
              >
                Create My Account
              </button>

            </form>

            <p className="text-center mt-3 small">
              Already have an account?{" "}
              <span className="text-success fw-bold">signin</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}