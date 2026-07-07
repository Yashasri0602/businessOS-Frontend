import { Routes, Route , Navigate} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import ProductDetails from "./pages/customer/ProductDetails";

import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import Order from "./pages/customer/Orders";
import Complaints from "./pages/customer/Complaints";
import CustomerProfile from "./pages/customer/CustomerProfile";
import ProcessingOrder from "./pages/customer/ProcessingOrder";
import OrderSuccess from "./pages/customer/OrderSuccess";



function App() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Business */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />}/>
      <Route path="/employees" element={<Employees />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/settings" element={<Settings />} />

      {/* Customer */}

      <Route path="/customer/home" element={<Home />} />

      <Route path="/customer/products" element={<Products />} />

      <Route path="/customer/product/:id" element={<ProductDetails />}/>
      <Route path="/customer/cart" element={<Cart />} />
      <Route path="/customer/cart" element={<Cart />} />

      <Route path="/customer/checkout" element={<Checkout />} />

      <Route path="/customer/orders" element={<Order />} />

      <Route path="/customer/complaints" element={<Complaints />}/>

      <Route path="/customer/CustomerProfile" element={<CustomerProfile />} />
      <Route path="/customer/processing" element={<ProcessingOrder />}/>
      <Route path="/customer/order-success" element={<OrderSuccess />} />
    </Routes>
  );
}

export default App;