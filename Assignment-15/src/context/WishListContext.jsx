import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(product) {
    const exists = wishlist.find((item) => item._id === product._id);
    if (exists) return;

    setWishlist([...wishlist, product]);
  }

  function removeFromWishlist(id) {
    setWishlist(wishlist.filter((item) => item._id !== id));
  }

  function isInWishlist(id) {
    return wishlist.some((item) => item._id === id);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}