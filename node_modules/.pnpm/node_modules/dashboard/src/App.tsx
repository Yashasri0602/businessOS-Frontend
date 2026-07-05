import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import ProductDetails from "./pages/customer/ProductDetails";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import Orders from "./pages/customer/Orders";
import Complaints from "./pages/customer/Complaints";
import Profile from "./pages/customer/Profile";
import ProcessingOrder from "./pages/customer/ProcessingOrder";
import OrderSuccess from "./pages/customer/OrderSuccess";



function App() {
  return (
    <Routes>

      {/* Business */}

      <Route path="/" element={<Dashboard />} />

      {/* Customer */}

      <Route path="/customer/home" element={<Home />} />

      <Route path="/customer/products" element={<Products />} />

      <Route
        path="/customer/product/:id"
        element={<ProductDetails />}
      />
      <Route path="/customer/cart" element={<Cart />} />
      <Route path="/customer/cart" element={<Cart />} />

      <Route path="/customer/checkout" element={<Checkout />} />

      <Route path="/customer/orders" element={<Orders />} />

      <Route
        path="/customer/complaints"
        element={<Complaints />}
      />

      <Route path="/customer/profile" element={<Profile />} />
      <Route
            path="/customer/processing"
            element={<ProcessingOrder />}
          />
          <Route
path="/customer/order-success"
element={<OrderSuccess />}
/>

    </Routes>
  );
}

export default App;