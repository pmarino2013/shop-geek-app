import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";
import ProductoScreen from "../pages/ProductoScreen";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductoScreen />} />

        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
};

export default RoutesApp;
