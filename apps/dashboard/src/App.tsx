import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import ProductDetails from "./pages/customer/ProductDetails";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import Order from "./pages/customer/Orders";
import Complaints from "./pages/customer/Complaints";
import Profile from "./pages/customer/Profile";
import ProcessingOrder from "./pages/customer/ProcessingOrder";
import OrderSuccess from "./pages/customer/OrderSuccess";



function App() {
  return (
    <Routes>

      {/* Business */}

      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />}/>
      <Route path="/employees" element={<Employees />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />

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

      <Route path="/customer/orders" element={<Order />} />

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