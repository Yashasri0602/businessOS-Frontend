const orders = [
  {
    id: "#1024",
    customer: "Rahul",
    amount: "₹240",
    status: "Completed",
  },
  {
    id: "#1025",
    customer: "Priya",
    amount: "₹120",
    status: "Pending",
  },
  {
    id: "#1026",
    customer: "John",
    amount: "₹560",
    status: "Completed",
  },
  {
    id: "#1027",
    customer: "Asha",
    amount: "₹89",
    status: "Processing",
  },
];

function RecentOrders() {
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

            <th className="pb-4 text-left">Order</th>
            <th className="pb-4 text-left">Customer</th>
            <th className="pb-4 text-left">Amount</th>
            <th className="pb-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b border-[#243652]"
            >

              <td className="py-5">

                {order.id}

              </td>

              <td>

                {order.customer}

              </td>

              <td>

                {order.amount}

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