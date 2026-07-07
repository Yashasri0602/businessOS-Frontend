import type { Order } from "../../types/order";
import OrderRow from "./OrderRow";

interface Props {
  orders: Order[];
  onDelete: () => void;
  onEdit: (order: Order) => void;
}

function OrderTable({
  orders,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Orders
        </h2>

        <span className="text-slate-400">
          {orders.length} Orders
        </span>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-[#243652] text-slate-400">

            <th className="px-4 pb-4 text-left">
              Customer
            </th>

            <th className="px-4 pb-4 text-left">
              Qty
            </th>

            <th className="px-4 pb-4 text-left">
              Total
            </th>

            <th className="px-4 pb-4 text-left">
              Status
            </th>

            <th className="px-4 pb-4 text-left">
              Payment Method
            </th>

            <th className="px-4 pb-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default OrderTable;