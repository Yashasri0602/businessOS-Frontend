import type { Expense } from "../../types/expense";
import { deleteExpense } from "../../services/expense.service";

interface Props {
  expense: Expense;
  onDelete: () => void;
  onEdit: (expense: Expense) => void;
}

function ExpenseRow({
  expense,
  onDelete,
  onEdit,
}: Props) {
  return (
    <tr className="border-b border-[#243652]">

      <td className="px-4 py-5 text-white">
        {expense.title}
      </td>

      <td className="px-4 text-slate-300">
        {expense.category}
      </td>

      <td className="px-4 text-slate-300">
        ₹{expense.amount.toLocaleString()}
      </td>

      <td className="px-4 text-slate-300">
        {new Date(expense.date).toLocaleDateString()}
      </td>

      <td className="px-4">

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(expense)}
            className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={async () => {
              if (!window.confirm("Delete this expense?")) return;

              try {
                await deleteExpense(expense._id!);
                onDelete();
              } catch (err) {
                console.error(err);
                alert("Failed to delete expense");
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

export default ExpenseRow;