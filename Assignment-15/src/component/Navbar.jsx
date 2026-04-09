
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishListContext";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  
  const user = localStorage.getItem("user");

  async function getCategories() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );

      const wantedNames = [
        "Electronics",
        "Women's Fashion",
        "Men's Fashion",
        "Beauty & Health",
      ];

      const filtered = res.data.data.filter((cat) =>
        wantedNames.includes(cat.name)
      );

      setCategories(filtered);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  function handleCategory(name) {
    navigate(`/products/${name}`);
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
    
      <div className="bg-light py-2 border-bottom">
        <div className="container d-flex justify-content-between small">
          <div className="d-flex gap-3">
            <span>🚚 Free Shipping on Orders 500 EGP</span>
            <span>🎁 New Arrivals Daily</span>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <span>📞 +1 (800) 123-4567</span>
            <span>✉ support@freshcart.com</span>

            {!user ? (
              <>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            ) : (
              <>
                <span>👤 Hala</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                  className="text-danger"
                >
                  Sign Out
                </span>
              </>
            )}
          </div>
        </div>
      </div>

    
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">

          <Link className="navbar-brand fw-bold text-success" to="/">
            FreshCart
          </Link>

          <form className="d-flex mx-4 w-50">
            <input className="form-control me-2" placeholder="Search..." />
            <button className="btn btn-success">🔍</button>
          </form>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">Shop</Link>
              </li>

            
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </span>

                <ul className="dropdown-menu shadow">

                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => navigate("/products")}
                    >
                      All Categories
                    </span>
                  </li>

                  {categories.map((cat) => (
                    <li key={cat._id}>
                      <span
                        className="dropdown-item"
                        onClick={() => handleCategory(cat.name)}
                      >
                        {cat.name}
                      </span>
                    </li>
                  ))}

                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/brands">Brands</Link>
              </li>

           
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Support
                </Link>
              </li>

            </ul>

           
            <div className="d-flex gap-3 align-items-center">

           
              <Link to="/wishlist" className="position-relative text-dark">
                <i className="fa-regular fa-heart"></i>

                {wishlist.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="position-relative text-dark">
                <i className="fa-solid fa-cart-shopping"></i>

                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill">
                    {cartCount}
                  </span>
                )}
              </Link>

              {!user && (
                <Link to="/login" className="btn btn-success">
                  Sign In
                </Link>
              )}

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}