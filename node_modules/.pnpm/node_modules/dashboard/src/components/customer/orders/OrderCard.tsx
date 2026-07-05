import OrderStatusBadge from "./OrderStatusBadge";
import OrderTimeline from "./OrderTimeline";

interface Props {
  id: string;
  product: string;
  amount: string;
  status: string;
}

function OrderCard({
  id,
  product,
  amount,
  status,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {product}
          </h2>

          <p className="mt-2 text-slate-400">
            Order #{id}
          </p>

        </div>

        <OrderStatusBadge status={status} />

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-slate-400">
          Total Paid
        </span>

        <span className="text-2xl font-bold text-[#C7F464]">
          {amount}
        </span>

      </div>

      <OrderTimeline />

    </div>
  );
}

export default OrderCard;