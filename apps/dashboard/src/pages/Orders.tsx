import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import type { Order } from "../types/order";

import OrderStats from "../components/orders/OrderStats";
import OrderFilters from "../components/orders/OrderFilters";
import OrderTable from "../components/orders/OrderTable";
import UpdateOrderModal from "../components/orders/UpdateOrderModal";

import { getOrders } from "../services/orders.service";

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [selectedOrder, setSelectedOrder] = useState<Order>();
  const [showModal, setShowModal] = useState(false);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error("Failed to load orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerId?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.customerId?.email
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Orders"
        subtitle="Track and manage customer orders."
      />

      {loading ? (
        <div className="mt-10 text-xl text-white">
          Loading Orders...
        </div>
      ) : (
        <>
          <OrderStats orders={orders} />

          <div className="mt-8">
            <OrderFilters
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
            />
          </div>

          <div className="mt-8">
            <OrderTable
              orders={filteredOrders}
              onDelete={fetchOrders}
              onEdit={(order) => {
                setSelectedOrder(order);
                setShowModal(true);
              }}
            />
          </div>
        </>
      )}

      {showModal && selectedOrder && (
        <UpdateOrderModal
          order={selectedOrder}
          onClose={() => {
            setShowModal(false);
            setSelectedOrder(undefined);
          }}
          onSuccess={fetchOrders}
        />
      )}
    </DashboardLayout>
  );
}

export default Orders;