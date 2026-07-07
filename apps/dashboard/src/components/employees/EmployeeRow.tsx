import type { Employee } from "../../types/employee";
import { deleteEmployee } from "../../services/employee.service";

interface Props {
  employee: Employee;
  onDelete: () => void;
  onEdit: (employee: Employee) => void;
}

function EmployeeRow({
  employee,
  onDelete,
  onEdit,
}: Props) {
  return (
    <tr className="border-b border-[#243652]">

      <td className="px-4 py-5 text-white">
        {employee.name}
      </td>

      <td className="px-4 text-slate-300">
        {employee.email}
      </td>

      <td className="px-4 text-slate-300">
        {employee.role}
      </td>

      <td className="px-4 text-slate-300">
        ₹{employee.salary.toLocaleString()}
      </td>

      <td
        className={`px-4 font-semibold ${
          employee.attendance === "Present"
            ? "text-green-400"
            : employee.attendance === "Leave"
            ? "text-yellow-400"
            : "text-red-400"
        }`}
      >
        {employee.attendance}
      </td>

      <td className="px-4">

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(employee)}
            className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={async () => {
              if (!window.confirm("Delete employee?")) return;

              try {
                await deleteEmployee(employee._id!);
                onDelete();
              } catch (err) {
                console.error(err);
                alert("Failed to delete employee");
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

export default EmployeeRow;