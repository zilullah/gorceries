import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./pages/Products";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  console.log(isSellerPath);
  return (
    <div className="">
      {isSellerPath ? null : <Navbar />}
      <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
