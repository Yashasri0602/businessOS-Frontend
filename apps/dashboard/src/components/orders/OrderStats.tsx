import type { Order } from "../../types/order";

interface Props {
  orders: Order[];
}

function OrderStats({ orders }: Props) {
  const totalOrders = orders.length;

  const pending = orders.filter(
    (o) => o.status === "Pending"
  ).length;

  const completed = orders.filter(
    (o) => o.status === "Completed"
  ).length;

  const revenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  const cards = [
    {
      title: "Orders",
      value: totalOrders,
    },
    {
      title: "Pending",
      value: pending,
    },
    {
      title: "Completed",
      value: completed,
    },
    {
      title: "Revenue",
      value: `₹${revenue.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-7"
        >
          <p className="text-lg text-slate-400">
            {card.title}
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default OrderStats;