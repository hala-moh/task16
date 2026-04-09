import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );

      const filtered = res.data.data.filter((p) => p.category.name === name);
      setProducts(filtered);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, [name]);

  return (
    <div className="container mt-4">
      <h2>{name}</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-4" key={p._id}>
            <div className="card p-2 h-100">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${p._id}`)}
              >
                <img
                  src={p.imageCover}
                  className="w-100"
                  style={{ height: "200px", objectFit: "contain" }}
                  alt={p.title}
                />
                <h6 className="mt-2">{p.title}</h6>
                <p className="text-muted mb-1">{p.category?.name}</p>
                <div className="d-flex justify-content-between">
                  <span>{p.price} EGP</span>
                  <span>⭐ {p.ratingsAverage || 0}</span>
                </div>
              </div>

              <button className="btn btn-success mt-3">+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}