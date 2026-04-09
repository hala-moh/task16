import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishListContext";

export default function BrandProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  async function getProducts() {
    try {
      const res = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`
      );
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-2 mb-4">
            <div className="product p-2">

             
              <i
                className={`fa fa-heart cursor-pointer ${
                  wishlist?.some((item) => item._id === product._id)
                    ? "text-danger"
                    : "text-muted"
                }`}
                onClick={() => addToWishlist(product._id)}
              ></i>

             
              <img
                src={product.imageCover}
                className="w-100 cursor-pointer"
                onClick={() => navigate(`/product/${product._id}`)}
                alt=""
              />

              <span className="text-main">
                {product.category.name}
              </span>

              <h6>
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h6>

              <div className="d-flex justify-content-between">
                <span>{product.price} EGP</span>
                <span>
                  <i className="fas fa-star rating-color"></i>
                  {product.ratingsAverage}
                </span>
              </div>

              <button
                onClick={() => addToCart(product._id)}
                className="btn bg-main text-white w-100 mt-2"
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}