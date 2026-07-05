import CustomerLayout from "../../layouts/CustomerLayout";
import OrderCard from "../../components/customer/orders/OrderCard";

const orders = [
  {
    id: "ORD1024",
    product: "Wireless Mouse",
    amount: "₹899",
    status: "Delivered",
  },
  {
    id: "ORD1025",
    product: "Mechanical Keyboard",
    amount: "₹2,299",
    status: "Processing",
  },
];

function Orders() {
  return (
    <CustomerLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          My Orders
        </h1>

        <p className="mt-2 text-slate-400">
          Track your recent purchases.
        </p>

      </div>

      <div className="space-y-8">

        {orders.map((order) => (

          <OrderCard
            key={order.id}
            {...order}
          />

        ))}

      </div>

    </CustomerLayout>
  );
}

export default Orders;