import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Service from "../pages/Service";
import NotFound from "../pages/NotFound";
import ProductsDetails from "../pages/ProductsDetails";
import ServiceDetails from "../components/ServiceDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      {/* dynamic routing*/}
      <Route path="/products/detail/:name" element={<ProductsDetails />} />
      {/* nested routing */}
      <Route path="/service" element={<Service />}>
        {/* dynamic routing */}
        <Route path="/service/detail" element={<ServiceDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
