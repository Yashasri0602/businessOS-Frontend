import { useState } from "react";
import type { Order } from "../../types/order";
import { updateOrder } from "../../services/orders.service";

interface Props {
  order: Order;
  onClose: () => void;
  onSuccess: () => void;
}

function UpdateOrderModal({
  order,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(order.status);

  const [paymentMethod, setPaymentMethod] = useState(
    order.paymentMethod
  );

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateOrder(order._id!, {
        status,
        paymentMethod,
      });

      await onSuccess();

      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-lg rounded-3xl bg-[#14233A] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          Update Order
        </h2>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-slate-400">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full rounded-xl bg-[#081120] p-3 text-white"
            >
              <option>Pending</option>
              <option>Processing</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-slate-400">
              Payment Method
            </label>

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="w-full rounded-xl bg-[#081120] p-3 text-white"
            >
              <option>Cash</option>
              <option>Card</option>
              <option>UPI</option>
              <option>Online</option>
            </select>

          </div>

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleSave}
            className="rounded-xl bg-[#C7F464] px-5 py-3 font-semibold text-black"
          >
            {loading ? "Saving..." : "Update"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default UpdateOrderModal;