import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";

const steps = [
  "Customer Verified",
  "Order Created",
  "Inventory Updated",
  "Revenue Updated",
  "Dashboard Analytics Updated",
  "Business Records Synced",
];

function ProcessingOrder() {

  const navigate = useNavigate();

  const [completed, setCompleted] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCompleted((prev) => {

        if (prev >= steps.length) {

          clearInterval(timer);

          setTimeout(() => {

            navigate("/customer/order-success");

          }, 1000);

          return prev;

        }

        return prev + 1;

      });

    }, 700);

    return () => clearInterval(timer);

  }, [navigate]);

  return (

    <CustomerLayout>

      <div className="flex min-h-[80vh] items-center justify-center">

        <div className="w-full max-w-3xl rounded-3xl border border-[#243652] bg-[#14233A] p-10">

          <h1 className="text-center text-4xl font-bold text-white">

            ⚡ BusinessOS AI

          </h1>

          <p className="mt-3 text-center text-slate-400">

            Processing your order...

          </p>

          <div className="mt-10 space-y-5">

            {steps.map((step, index) => (

              <div
                key={step}
                className={`rounded-2xl border p-5 transition-all duration-500 ${
                  index < completed
                    ? "border-[#C7F464] bg-[#1B2C47]"
                    : "border-[#243652]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-lg">

                    {step}

                  </span>

                  <span className="text-2xl">

                    {index < completed ? "✅" : "⏳"}

                  </span>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-10 h-3 overflow-hidden rounded-full bg-[#243652]">

            <div
              className="h-full bg-[#C7F464] transition-all duration-700"
              style={{
                width: `${(completed / steps.length) * 100}%`,
              }}
            />

          </div>

        </div>

      </div>

    </CustomerLayout>

  );

}

export default ProcessingOrder;