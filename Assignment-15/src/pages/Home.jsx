
import React from 'react'
import NewsletterSection from './NewsletterSection'
import Products from "../pages/Products";
import { useNavigate } from "react-router-dom";
export default function Home() {
const navigate = useNavigate();


const categories = [
  {
    name: "Music",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    name: "Men's Fashion",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    name: "Women's Fashion",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  },
  {
    name: "SuperMarket",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  },
  {
    name: "Baby & Toys",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b"
  },
  {
    name: "Home",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    name: "Books",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    name: "Beauty & Health",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    name: "Mobiles",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
  }
];









  return (
  <div>

    <div className="container mt-4">

  
      <div
        className="position-relative rounded overflow-hidden"
        style={{ height: "350px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          alt=""
        />

     
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(25, 135, 84, 0.6)" }}
        ></div>

     
        <div className="position-absolute top-50 start-0 translate-middle-y ps-5 text-white">
          <h2 className="fw-bold">Fresh Products Delivered</h2>
          <h2 className="fw-bold">to your Door</h2>

          <p>Get 20% off your first order</p>

          <div className="d-flex gap-3">
            <button className="btn btn-light">Shop Now</button>
            <button className="btn btn-outline-light">View Deals</button>
          </div>
        </div>




       
        <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle">
          ❮
        </button>

        <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle">
          ❯
        </button>
      </div>



      <div className="row mt-4 text-center">


























        <div className="col-md-3">
          🚚
          <h6>Free Shipping</h6>
          <small>On orders over 500 EGP</small>
        </div>

        <div className="col-md-3">
          🔒
          <h6>Secure Payment</h6>
          <small>100% secure transactions</small>
        </div>

        <div className="col-md-3">
          🔄
          <h6>Easy Returns</h6>
          <small>14-day return policy</small>
        </div>

        <div className="col-md-3">
          🎧
          <h6>24/7 Support</h6>
          <small>Dedicated support</small>
        </div>
      </div>








<div className="row g-3 mt-3">
  {categories.map((cat, i) => (
    <div key={i} className="col-md-2 col-6 text-center">

      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/category/${cat.name}`)}
      >

        {/* الصورة دائرية */}
        <img
          src={cat.img}
          className="rounded-circle mb-2"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            border: "2px solid #eee"
          }}
        />

        <p className="small fw-semibold">{cat.name}</p>

      </div>

    </div>
  ))}
</div>
















<div className="container my-5">

  <div className="row g-4">

    {/* LEFT */}
    <div className="col-md-6">
      <div
        className="p-4 text-white rounded"
        style={{
          background: "linear-gradient(135deg, #28a745, #198754)",
          minHeight: "200px"
        }}
      >

        <small>🔥 Deal of the Day</small>

        <h3 className="fw-bold mt-2">
          Fresh Organic Fruits
        </h3>

        <p>Get up to 40% off on selected organic fruits</p>

        <h4 className="fw-bold">40% OFF</h4>

        <button
          onClick={() => navigate("/products")}
          className="btn btn-light mt-3"
        >
          Shop Now →
        </button>

      </div>
    </div>

    {/* RIGHT */}
    <div className="col-md-6">
      <div
        className="p-4 text-white rounded"
        style={{
          background: "linear-gradient(135deg, #ff7a18, #ff4e50)",
          minHeight: "200px"
        }}
      >

        <small>🆕 New Arrivals</small>

        <h3 className="fw-bold mt-2">
          Exotic Vegetables
        </h3>

        <p>Discover our latest collection of premium vegetables</p>

        <h4 className="fw-bold">25% OFF</h4>

        <button
          onClick={() => navigate("/products")}
          className="btn btn-light mt-3"
        >
          Explore Now →
        </button>

      </div>
    </div>

  </div>

</div>








      <div className="mt-5">
        <h4 className="fw-bold mb-3">Featured Products</h4>
        <Products />
      </div>





    </div>







































<NewsletterSection/>
    </div>
  )
}