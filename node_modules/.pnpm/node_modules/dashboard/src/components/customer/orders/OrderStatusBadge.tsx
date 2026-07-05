interface Props {
  status: string;
}

function OrderStatusBadge({ status }: Props) {
  const colors: Record<string, string> = {
    Delivered: "bg-green-500",
    Processing: "bg-yellow-500",
    Shipped: "bg-blue-500",
    Cancelled: "bg-red-500",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${
        colors[status] || "bg-gray-500"
      }`}
    >
      {status}
    </span>
  );
}

export default OrderStatusBadge;