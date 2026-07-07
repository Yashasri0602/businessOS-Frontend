interface Props {
  report: any;
}

function ExpenseReport({ report }: Props) {
  const expenses = report.expenses;

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Expense Report
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-slate-400">
            Total Expenses
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹{expenses.totalExpenses.toLocaleString()}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Expense Count
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {expenses.count}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default ExpenseReport;