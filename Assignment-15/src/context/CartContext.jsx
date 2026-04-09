
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 
  function addToCart(product) {
    const exists = cart.find(item => item._id === product._id);

    if (exists) {
      setCart(
        cart.map(item =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  
  function removeFromCart(id) {
    setCart(cart.filter(item => item._id !== id));
  }


  function increaseQty(id) {
    setCart(
      cart.map(item =>
        item._id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  }


  function decreaseQty(id) {
    setCart(
      cart.map(item =>
        item._id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  }

 
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}