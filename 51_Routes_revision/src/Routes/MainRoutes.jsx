import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import PageNotFound from "../Components/PageNotFound";
import Product from "../Pages/Product";
import ProductsDetails from "../Components/ProductsDetails";
import ServiceDetails from "../Components/ServiceDetails";

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:name" element={<ProductsDetails />} />
        <Route path="/service" element={<Service />} >
         <Route path="/service/more" element={<ServiceDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default MainRoutes;
