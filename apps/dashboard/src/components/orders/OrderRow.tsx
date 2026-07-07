import type { Order } from "../../types/order";
import { deleteOrder } from "../../services/orders.service";

interface Props {
  order: Order;
  onDelete: () => void;
  onEdit: (order: Order) => void;
}

function OrderRow({
  order,
  onDelete,
  onEdit,
}: Props) {
  const getStatusColor = () => {
    switch (order.status) {
      case "Completed":
        return "bg-green-500 text-white";

      case "Processing":
        return "bg-blue-500 text-white";

      case "Cancelled":
        return "bg-red-500 text-white";

      default:
        return "bg-yellow-500 text-black";
    }
  };

  const totalQuantity = order.products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <tr className="border-b border-[#243652]">

      <td className="px-4 py-5">
        <p className="font-semibold text-white">
            {order.customerId?.name}
        </p>
        <div className="mt-2 space-y-1">
            {order.products.map((item, index) => (
            <p
                key={index}
                className="text-xs text-slate-400"
            >
                • {item.product.name} × {item.quantity}
            </p>
            ))}
        </div>
      </td>
      <td className="px-4 text-slate-300">
        {totalQuantity}
      </td>

      <td className="px-4 text-slate-300">
        ₹{order.totalAmount}
      </td>

      <td className="px-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor()}`}
        >
          {order.status}
        </span>
      </td>

      <td className="px-4 text-slate-300">
        {order.paymentMethod}
      </td>

      <td className="px-4">

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(order)}
            className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Update
          </button>

          <button
            onClick={async () => {
              if (
                !window.confirm(
                  "Delete this order?"
                )
              )
                return;

              try {
                await deleteOrder(order._id!);
                onDelete();
              } catch (err) {
                console.error(err);
                alert("Failed to delete order");
              }
            }}
            className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}

export default OrderRow;