import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        formData
      );

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);

      alert("Login Success ✅");
      navigate("/");

    } catch {
      alert("Wrong email or password ❌");
    }
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src="https://ms.hsoubcdn.com/uploads/thumbnails/3907227/699958d769d69/login-image.png?s=medium"
            className="w-100"
            style={{
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
            alt=""
          />




          <h3 className="fw-bold mt-3">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h3>

          <p className="text-muted">
            Join thousands of happy customers who trust FreshCart for their daily grocery needs
          </p>

          <div className="d-flex gap-4 text-success mt-2">
            <small>🚚 Free Delivery</small>
            <small>🔒 Secure Payment</small>
            <small>📞 24/7 Support</small>
          </div>
        </div>

   
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-white">

            <h3 className="text-success fw-bold">FreshCart</h3>
            <h5 className="fw-bold">Welcome Back!</h5>
            <p className="text-muted small mb-3">
              Sign in to continue your fresh shopping experience
            </p>

        
            <button type="button" className="btn w-100 border mb-2 rounded-pill">
              🔴 Continue with Google
            </button>

            <button type="button" className="btn w-100 border mb-3 rounded-pill">
              🔵 Continue with Facebook
            </button>

            <p className="text-center text-muted small">OR CONTINUE WITH EMAIL</p>

        
            <form onSubmit={handleSubmit}>

             
              <label className="small">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <label className="small d-flex justify-content-between">
                Password
                <span className="text-success">Forgot Password?</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control mb-2 rounded-pill"
                onChange={handleChange}
              />

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label small">
                  Keep me signed in
                </label>
              </div>

              <button className="btn btn-success w-100 rounded-pill">
                Sign In
              </button>

            </form>

            <p className="text-center mt-3 small">
              New to FreshCart?{" "}
              <Link to="/signup" className="text-success fw-bold text-decoration-none">
                Create an account
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}