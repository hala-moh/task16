import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    "Music",
    "Men's Fashion",
    "Women's Fashion",
    "SuperMarket",
    "Baby & Toys",
    "Home",
    "Books",
    "Beauty & Health",
    "Mobiles",
    "Electronics"
  ];

  return (
    <div className="container my-5">

    
      <h3 className="fw-bold mb-4">
        <span className="text-success">Shop By</span> Category
      </h3>

      <div className="row g-4">

        {categories.map((cat, index) => (
          <div key={index} className="col-md-3 col-sm-6">

            <div
              className="border rounded p-4 text-center shadow-sm"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => navigate(`/category/${cat}`)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
            
              <div
                className="mb-3 d-flex justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#e9f7ef",
                  margin: "auto"
                }}
              >
                📦
              </div>

            
              <h6 className="fw-bold">{cat}</h6>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}