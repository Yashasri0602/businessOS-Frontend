interface Order {
  customerId: {
    name: string;
  };
  totalAmount: number;
  status: string;
  paymentMethod: string;
  createdAt: string;
}

interface Props {
  orders: Order[];
}

function RecentOrders({ orders }: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Orders
        </h2>

        <button className="text-[#C7F464]">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#243652] text-slate-400">
            <th className="pb-4 text-left">Customer</th>
            <th className="pb-4 text-left">Amount</th>
            <th className="pb-4 text-left">Payment</th>
            <th className="pb-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b border-[#243652]"
            >
              <td className="py-5">
                {order.customerId?.name ?? "Unknown"}
              </td>

              <td>
                ₹{order.totalAmount.toLocaleString()}
              </td>

              <td>
                {order.paymentMethod}
              </td>

              <td>
                <span className="rounded-full bg-[#C7F464] px-4 py-2 text-sm font-semibold text-black">
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;