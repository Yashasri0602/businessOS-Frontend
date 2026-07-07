import { useState } from "react";

import type { Employee } from "../../types/employee";

import {
  createEmployee,
  updateEmployee,
} from "../../services/employee.service";

interface Props {
  employee?: Employee;
  onClose: () => void;
  onSuccess: () => void;
}

function AddEmployeeModal({
  employee,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Employee>({
    name: employee?.name || "",
    email: employee?.email || "",
    phone: employee?.phone || "",
    role: employee?.role || "",
    salary: employee?.salary || 0,
    joiningDate: employee?.joiningDate
      ? employee.joiningDate.split("T")[0]
      : new Date().toISOString().split("T")[0],
    attendance: employee?.attendance || "Present",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
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

      if (employee?._id) {
        await updateEmployee(employee._id, form);
      } else {
        await createEmployee(form);
      }

      await onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to save employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-3xl rounded-3xl bg-[#14233A] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            name="name"
            placeholder="Employee Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            type="date"
            name="joiningDate"
            value={form.joiningDate}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          >
            <option>Present</option>
            <option>Absent</option>
            <option>Leave</option>
          </select>

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
            {loading ? "Saving..." : "Save Employee"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddEmployeeModal;