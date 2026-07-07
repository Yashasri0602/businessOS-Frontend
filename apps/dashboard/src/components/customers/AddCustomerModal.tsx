import { useState } from "react";
import type { Customer } from "../../types/customer";
import {
  createCustomer,
  updateCustomer,
} from "../../services/customers.service";

interface Props {
  customer?: Customer;
  onClose: () => void;
  onSuccess: () => void;
}

function AddCustomerModal({
  customer,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Customer>(
    customer ?? {
      name: "",
      phone: "",
      email: "",
      address: "",
      notes: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (customer?._id) {
        await updateCustomer(customer._id, form);
      } else {
        await createCustomer(form);
      }

      await onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert(
        customer
          ? "Failed to update customer"
          : "Failed to create customer"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-2xl rounded-3xl bg-[#14233A] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          {customer ? "Edit Customer" : "Add Customer"}
        </h2>

        <div className="grid gap-5">

          <input
            name="name"
            value={form.name}
            placeholder="Customer Name"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="address"
            value={form.address}
            placeholder="Address"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <textarea
            name="notes"
            value={form.notes}
            placeholder="Notes"
            onChange={handleChange}
            className="h-28 rounded-xl bg-[#081120] p-3 text-white"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-[#C7F464] px-5 py-3 font-semibold text-black"
          >
            {loading
              ? "Saving..."
              : customer
              ? "Update Customer"
              : "Save Customer"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddCustomerModal;