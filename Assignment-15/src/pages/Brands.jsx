import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  async function getBrands() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setBrands(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="container my-5">
     
      <div
        className="rounded p-4 mb-4 text-white"
        style={{
          background: "linear-gradient(90deg, #8e44ad, #6c5ce7)",
        }}
      >
        <h2 className="fw-bold mb-2">Top Brands</h2>
        <p className="mb-0">Shop from your favorite brands</p>
      </div>

      <div className="row">
        {brands.map((brand) => (
          <div key={brand._id} className="col-md-2 col-sm-4 col-6 mb-4">
            <div
              className="card h-100 text-center p-3 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/brand/${brand._id}`)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="img-fluid mx-auto mb-3"
                style={{ height: "80px", objectFit: "contain" }}
              />

              <h6 className="mb-0">{brand.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}