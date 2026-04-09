
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate(); 

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty</h3>
        <Link to="/products" className="btn btn-success mt-3">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Shopping Cart</h2>

      <div className="row">

      
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item._id} className="card mb-3 p-3 shadow-sm">
              <div className="row align-items-center">

              
                <div className="col-md-2">
                  <img
                    src={item.imageCover}
                    className="img-fluid rounded"
                  />
                </div>

              
                <div className="col-md-4">
                  <h6>{item.title}</h6>
                  <small className="text-muted">
                    {item.category?.name}
                  </small>
                  <p className="text-success fw-bold mb-0">
                    {item.price} EGP
                  </p>
                </div>

            
                <div className="col-md-3 d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQty(item._id)}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => increaseQty(item._id)}
                  >
                    +
                  </button>
                </div>

              
                <div className="col-md-2 text-end">
                  <p className="fw-bold mb-0">
                    {item.price * item.qty} EGP
                  </p>
                </div>

              
                <div className="col-md-1 text-end">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item._id)}
                  >
                    🗑
                  </button>
                </div>

              </div>
            </div>
          ))}

        
          <button
            className="btn btn-outline-danger mt-3"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

      
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Total</span>
              <span className="fw-bold">{total} EGP</span>
            </div>

           
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() => navigate("/checkout")}
            >
              Secure Checkout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}