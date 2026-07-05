import { useNavigate } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";

function OrderSuccess() {

  const navigate = useNavigate();

  return (

    <CustomerLayout>

      <div className="flex min-h-[80vh] items-center justify-center">

        <div className="w-full max-w-2xl rounded-3xl border border-[#243652] bg-[#14233A] p-12 text-center">

          <div className="text-8xl">

            🎉

          </div>

          <h1 className="mt-6 text-4xl font-bold text-white">

            Order Placed Successfully

          </h1>

          <p className="mt-5 text-slate-400">

            Thank you for shopping with us.

            Your order has been received and is being processed.

          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <button
              onClick={() => navigate("/customer/orders")}
              className="rounded-2xl bg-[#C7F464] py-4 font-bold text-black"
            >

              View Orders

            </button>

            <button
              onClick={() => navigate("/customer/products")}
              className="rounded-2xl border border-[#243652] py-4"

            >

              Continue Shopping

            </button>

          </div>

        </div>

      </div>

    </CustomerLayout>

  );

}

export default OrderSuccess;