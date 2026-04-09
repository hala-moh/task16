

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishListContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist } = useContext(WishlistContext);

  const isInWishlist = wishlist.some((item) => item._id === product?._id);

  async function getProductDetails() {
    try {
      const res = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );

      setProduct(res.data.data);
      setActiveImage(res.data.data.imageCover);
    } catch (err) {
      console.log(err);
    }
  }

  async function getRelatedProducts(categoryName) {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );

      const filtered = res.data.data.filter(
        (item) => item.category?.name === categoryName && item._id !== id
      );

      setRelatedProducts(filtered.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [id]);

  useEffect(() => {
    if (product?.category?.name) {
      getRelatedProducts(product.category.name);
    }
  }, [product]);

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageCover];

  return (
    <div className="container my-5">
      <div className="row g-4">
       
        <div className="col-md-5">
          <div className="border rounded p-3 text-center mb-3">
            <img
              src={activeImage}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="d-flex gap-2 flex-wrap">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(img)}
                className={`border rounded p-1 ${
                  activeImage === img ? "border-primary" : ""
                }`}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

       
        <div className="col-md-7">
          <div className="mb-2 text-muted">
            <span>{product.category?.name}</span>
            {" / "}
            <span>{product.brand?.name}</span>
          </div>

          <h2 className="fw-bold">{product.title}</h2>

          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="text-warning">
              ⭐ {product.ratingsAverage || 0}
            </span>
            <span className="text-muted">
              ({product.ratingsQuantity || 0} reviews)
            </span>
          </div>

          <div className="mb-3">
            <span className="fs-2 fw-bold text-success me-3">
              {product.price} EGP
            </span>

            {product.priceAfterDiscount && (
              <>
                <span className="text-muted text-decoration-line-through me-2">
                  {product.priceAfterDiscount} EGP
                </span>
                <span className="badge bg-danger">Save</span>
              </>
            )}
          </div>

          <p className="text-muted">{product.description}</p>

          <div className="mb-4">
            <label className="form-label fw-semibold">Quantity</label>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>

              <span className="fw-bold">{quantity}</span>

              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <button
                className="btn btn-success w-100"
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <div className="col-md-6">
              <button className="btn btn-dark w-100">Buy Now</button>
            </div>
          </div>

       
          <div
            className="d-flex align-items-center gap-2 mt-2 mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => addToWishlist(product)}
          >
            <i
              className={`fa-heart ${
                isInWishlist ? "fa-solid text-danger" : "fa-regular"
              }`}
            ></i>

            <span className={isInWishlist ? "text-danger fw-bold" : ""}>
              {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </span>
          </div>

          <div className="row text-center g-3">
            <div className="col-md-4">
              <div className="border rounded p-3">
                <h6 className="mb-1">Free Delivery</h6>
                <small className="text-muted">Orders over 500 EGP</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded p-3">
                <h6 className="mb-1">30 Days Return</h6>
                <small className="text-muted">Money back</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border rounded p-3">
                <h6 className="mb-1">Secure Payment</h6>
                <small className="text-muted">100% Protected</small>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="mt-5">
        <div className="d-flex gap-4 border-bottom pb-2 mb-4">
          <button
            className={`btn btn-link text-decoration-none ${
              activeTab === "details" ? "fw-bold text-success" : "text-dark"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>

          <button
            className={`btn btn-link text-decoration-none ${
              activeTab === "reviews" ? "fw-bold text-success" : "text-dark"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.ratingsQuantity || 0})
          </button>

          <button
            className={`btn btn-link text-decoration-none ${
              activeTab === "shipping" ? "fw-bold text-success" : "text-dark"
            }`}
            onClick={() => setActiveTab("shipping")}
          >
            Shipping & Returns
          </button>
        </div>

        {activeTab === "details" && (
          <div className="border rounded p-4">
            <h4>About this Product</h4>
            <p className="text-muted">{product.description}</p>

            <div className="row mt-4">
              <div className="col-md-6">
                <h6>Product Information</h6>
                <p className="mb-1">
                  <strong>Category:</strong> {product.category?.name}
                </p>
                <p className="mb-1">
                  <strong>Brand:</strong> {product.brand?.name}
                </p>
                <p className="mb-1">
                  <strong>Stock:</strong> {product.quantity}
                </p>
              </div>

              <div className="col-md-6">
                <h6>Key Features</h6>
                <p className="mb-1">✔ Premium Quality Product</p>
                <p className="mb-1">✔ Quality Tested</p>
                <p className="mb-1">✔ Fast & Secure Packaging</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="border rounded p-4">
            <h4>Customer Reviews</h4>
            <p className="text-muted">
              Rating: {product.ratingsAverage || 0} / 5
            </p>
            <p className="text-muted">
              Total Reviews: {product.ratingsQuantity || 0}
            </p>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="border rounded p-4">
            <h4>Shipping & Returns</h4>
            <p className="text-muted">
              Free shipping on orders over 500 EGP. Returns available within 14
              days according to store policy.
            </p>
          </div>
        )}
      </div>

    
      <div className="mt-5">
        <h3 className="fw-bold mb-4">You May Also Like</h3>

        <div className="row">
          {relatedProducts.map((item) => (
            <div className="col-md-2 mb-4" key={item._id}>
              <div
                className="card h-100 p-2"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <img
                  src={item.imageCover}
                  alt={item.title}
                  className="w-100"
                  style={{ height: "170px", objectFit: "contain" }}
                />

                <div className="mt-2">
                  <small className="text-muted">{item.category?.name}</small>
                  <h6>{item.title.split(" ").slice(0, 5).join(" ")}</h6>
                  <p className="fw-bold mb-0">{item.price} EGP</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}