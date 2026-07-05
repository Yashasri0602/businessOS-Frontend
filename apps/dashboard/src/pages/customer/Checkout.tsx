import CustomerLayout from "../../layouts/CustomerLayout";

import AddressCard from "../../components/customer/checkout/AddressCard";
import DeliveryOptions from "../../components/customer/checkout/DeliveryOptions";
import PaymentMethods from "../../components/customer/checkout/PaymentMethods";
import OrderReview from "../../components/customer/checkout/OrderReview";
import PriceBreakdown from "../../components/customer/checkout/PriceBreakdown";
import PlaceOrderButton from "../../components/customer/checkout/PlaceOrderButton";

function Checkout() {
  return (
    <CustomerLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Checkout
        </h1>

        <p className="mt-2 text-slate-400">
          Complete your purchase securely.
        </p>

      </div>

      <div className="grid gap-8 xl:grid-cols-3">

        {/* Left Side */}

        <div className="space-y-8 xl:col-span-2">

          <AddressCard />

          <DeliveryOptions />

          <PaymentMethods />

          <OrderReview />

        </div>

        {/* Right Side */}

        <div className="sticky top-28 h-fit">

          <PriceBreakdown />

          <PlaceOrderButton />

        </div>

      </div>

    </CustomerLayout>
  );
}

export default Checkout;