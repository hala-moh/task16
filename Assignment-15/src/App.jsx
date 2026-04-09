import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AuthRoute from "./component/AuthRoute";


import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import SubCategoryDetails from "./pages/SubCategoryDetails";
import Brands from "./pages/Brands";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contacts"; 
import Checkout from "./pages/Checkout"; 

import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<CategoryDetails />} />
        <Route path="/subcategory/:name" element={<SubCategoryDetails />} />

        <Route path="/brands" element={<Brands />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/wishlist"
          element={
            <AuthRoute>
              <Wishlist />
            </AuthRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <AuthRoute>
              <Cart />
            </AuthRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="*"
          element={<h1 className="text-center mt-5">404 Not Found ❌</h1>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;