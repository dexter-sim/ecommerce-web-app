import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { FilterCatProvider } from "./context/FilterCatContext";
import { FilterPriceProvider } from "./context/FilterPriceContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:id" element={<ProductPage />} />
            <Route
              path="/shop"
              element={
                <FilterCatProvider>
                  <FilterPriceProvider>
                    <Shop />
                  </FilterPriceProvider>{" "}
                </FilterCatProvider>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
