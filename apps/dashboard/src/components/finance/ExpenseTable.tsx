import type { Expense } from "../../types/expense";
import ExpenseRow from "./ExpenseRow";

interface Props {
  expenses: Expense[];
  onDelete: () => void;
  onEdit: (expense: Expense) => void;
}

function ExpenseTable({
  expenses,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Expenses
        </h2>

        <span className="text-slate-400">
          {expenses.length} Expenses
        </span>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-[#243652] text-slate-400">

            <th className="px-4 pb-4 text-left">
              Title
            </th>

            <th className="px-4 pb-4 text-left">
              Category
            </th>

            <th className="px-4 pb-4 text-left">
              Amount
            </th>

            <th className="px-4 pb-4 text-left">
              Date
            </th>

            <th className="px-4 pb-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {expenses.map((expense) => (
            <ExpenseRow
              key={expense._id}
              expense={expense}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ExpenseTable;