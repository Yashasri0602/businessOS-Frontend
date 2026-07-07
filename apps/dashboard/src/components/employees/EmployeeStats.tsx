import type { Employee } from "../../types/employee";

interface Props {
  employees: Employee[];
}

function EmployeeStats({ employees }: Props) {
  const totalEmployees = employees.length;

  const present = employees.filter(
    (e) => e.attendance === "Present"
  ).length;

  const onLeave = employees.filter(
    (e) => e.attendance === "Leave"
  ).length;

  const salaryBudget = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  const cards = [
    {
      title: "Employees",
      value: totalEmployees,
    },
    {
      title: "Present Today",
      value: present,
    },
    {
      title: "On Leave",
      value: onLeave,
    },
    {
      title: "Salary Budget",
      value: `₹${salaryBudget.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-7"
        >

          <p className="text-lg text-slate-400">
            {card.title}
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            {card.value}
          </h2>

        </div>
      ))}

    </div>
  );
}

export default EmployeeStats;