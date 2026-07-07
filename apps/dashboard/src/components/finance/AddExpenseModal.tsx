import { useState } from "react";

import type { Expense } from "../../types/expense";

import {
  createExpense,
  updateExpense,
} from "../../services/expense.service";

interface Props {
  expense?: Expense;
  onClose: () => void;
  onSuccess: () => void;
}

function AddExpenseModal({
  expense,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Expense>({
    title: expense?.title || "",
    category: expense?.category || "",
    amount: expense?.amount || 0,
    date: expense?.date
      ? expense.date.split("T")[0]
      : new Date().toISOString().split("T")[0],
    description: expense?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (expense?._id) {
        await updateExpense(expense._id, form);
      } else {
        await createExpense(form);
      }

      await onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to save expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-2xl rounded-3xl bg-[#14233A] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          {expense ? "Edit Expense" : "Add Expense"}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            name="title"
            placeholder="Expense Title"
            value={form.title}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="mt-5 h-28 w-full rounded-xl bg-[#081120] p-3 text-white"
        />

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-xl bg-[#C7F464] px-5 py-3 font-semibold text-black"
          >
            {loading ? "Saving..." : "Save Expense"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddExpenseModal;