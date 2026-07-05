import CustomerLayout from "../../layouts/CustomerLayout";

import CartHeader from "../../components/customer/cart/CartHeader";
import CartItem from "../../components/customer/cart/CartItem";
import CouponBox from "../../components/customer/cart/CouponBox";
import OrderSummary from "../../components/customer/cart/OrderSummary";
import SuggestedProducts from "../../components/customer/cart/SuggestedProducts";

function Cart() {
  return (
    <CustomerLayout>

      <CartHeader />

      <div className="grid gap-8 xl:grid-cols-3">

        {/* Left */}

        <div className="space-y-6 xl:col-span-2">

          <CartItem
            name="Wireless Mouse"
            price="₹899"
            quantity={2}
          />

          <CartItem
            name="Mechanical Keyboard"
            price="₹2,299"
            quantity={1}
          />

          <CartItem
            name="Laptop Stand"
            price="₹999"
            quantity={1}
          />

          <CouponBox />

        </div>

        {/* Right */}

        <OrderSummary />

      </div>

      <SuggestedProducts />

    </CustomerLayout>
  );
}

export default Cart;