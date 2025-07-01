import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import LoginForm from "./components/LoginForm";
import { useAppContext } from "./context/AppContext";
import Carts from "./pages/Carts";
import NotFound from "./pages/NotFound";
import LoginSeller from "./pages/LoginSeller";
import DashboardSeller from "./pages/DashboardSeller";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showLoginForm } = useAppContext();
  return (
    <div className="">
      {isSellerPath ? null : <Navbar />}
      <Toaster />
      {showLoginForm && <LoginForm />}
      <main className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginseller" element={<LoginSeller />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/dashboardseller" element={<DashboardSeller />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
