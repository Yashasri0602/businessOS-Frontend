import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import EmployeeStats from "../components/employees/EmployeeStats";
import EmployeeFilters from "../components/employees/EmployeeFilters";
import EmployeeTable from "../components/employees/EmployeeTable";
import AddEmployeeModal from "../components/employees/AddEmployeeModal";

import type { Employee } from "../types/employee";

import { getEmployees } from "../services/employee.service";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee>();

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Employees"
        subtitle="Manage employees, attendance and payroll."
        buttonText="+ Add Employee"
        onButtonClick={() => {
          setSelectedEmployee(undefined);
          setShowModal(true);
        }}
      />

      {loading ? (
        <div className="mt-10 text-xl text-white">
          Loading employees...
        </div>
      ) : (
        <>

          <EmployeeStats employees={employees} />

          <div className="mt-8">
            <EmployeeFilters
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="mt-8">
            <EmployeeTable
              employees={filteredEmployees}
              onDelete={fetchEmployees}
              onEdit={(employee) => {
                setSelectedEmployee(employee);
                setShowModal(true);
              }}
            />
          </div>

        </>
      )}

      {showModal && (
        <AddEmployeeModal
          employee={selectedEmployee}
          onClose={() => {
            setShowModal(false);
            setSelectedEmployee(undefined);
          }}
          onSuccess={fetchEmployees}
        />
      )}

    </DashboardLayout>
  );
}

export default Employees;