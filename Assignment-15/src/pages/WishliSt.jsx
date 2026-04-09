
import { useContext } from "react";
import { WishlistContext } from "../context/WishListContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <h5>No items yet</h5>
      ) : (
        wishlist.map((item) => (
          <div
            key={item._id}
            className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm"
          >
            <div className="d-flex gap-3 align-items-center">
              <img src={item.imageCover} width="70" />
              <div>
                <h6>{item.title}</h6>
                <p className="text-success">{item.price} EGP</p>
              </div>
            </div>

            <button
              onClick={() => removeFromWishlist(item._id)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}