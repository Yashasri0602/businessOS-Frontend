import type { Employee } from "../../types/employee";
import EmployeeRow from "./EmployeeRow";

interface Props {
  employees: Employee[];
  onDelete: () => void;
  onEdit: (employee: Employee) => void;
}

function EmployeeTable({
  employees,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Employees
        </h2>

        <span className="text-slate-400">
          {employees.length} Employees
        </span>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-[#243652] text-slate-400">

            <th className="px-4 pb-4 text-left">
              Name
            </th>

            <th className="px-4 pb-4 text-left">
              Email
            </th>

            <th className="px-4 pb-4 text-left">
              Role
            </th>

            <th className="px-4 pb-4 text-left">
              Salary
            </th>

            <th className="px-4 pb-4 text-left">
              Attendance
            </th>

            <th className="px-4 pb-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <EmployeeRow
              key={employee._id}
              employee={employee}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;