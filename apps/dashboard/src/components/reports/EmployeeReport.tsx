interface Props {
  report: any;
}

function EmployeeReport({ report }: Props) {
  const employees = report.employees;

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Employee Report
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-slate-400">
            Employees
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {employees.totalEmployees}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Salary Budget
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹{employees.totalMonthlySalaryBudget.toLocaleString()}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default EmployeeReport;