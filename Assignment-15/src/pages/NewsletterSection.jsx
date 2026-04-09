import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === "") return;

    setSubscribed(true);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center rounded-4 p-4 p-md-5 bg-light">

      
        <div className="col-md-7">

          <h2 className="fw-bold mb-3">
            Get the Freshest Updates{" "}
            <span className="text-success">Delivered Free</span>
          </h2>

          <p className="text-muted mb-4">
            Weekly recipes, seasonal offers & exclusive member perks.
          </p>

          <div className="d-flex gap-3">
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSubscribe}
              className="btn rounded-pill px-4"
              style={{
                backgroundColor: subscribed ? "#198754" : "#20c997",
                color: "white",
                minWidth: "150px"
              }}
            >
              {subscribed ? "✔ You're In!" : "Subscribe →"}
            </button>
          </div>

        </div>

       
        <div className="col-md-5">
          <div className="bg-dark text-white p-4 rounded-4">
            <h4>Shop Faster on Our App</h4>
            <p className="text-white-50">
              Get app-exclusive deals & 15% off your first order.
            </p>

            <button className="btn btn-secondary w-100 mb-2">
              App Store
            </button>

            <button className="btn btn-secondary w-100">
              Google Play
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}