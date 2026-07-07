import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import type { Customer } from "../types/customer";

import CustomerStats from "../components/customers/CustomerStats";
import CustomerFilters from "../components/customers/CustomerFilters";
import CustomerTable from "../components/customers/CustomerTable";
import AddCustomerModal from "../components/customers/AddCustomerModal";

import { getCustomers } from "../services/customers.service";

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer>();

  const fetchCustomers = async () => {
    try {
      const customers = await getCustomers();
      setCustomers(customers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

  return (
    <DashboardLayout>
      <PageHeader
        title="Customers"
        subtitle="Manage your customer relationships."
        buttonText="+ Add Customer"
        onButtonClick={() => {
          setSelectedCustomer(undefined);
          setShowAddModal(true);
        }}
      />

      {loading ? (
        <div className="mt-10 text-white text-xl">
          Loading Customers...
        </div>
      ) : (
        <>
          <CustomerStats customers={customers} />

          <div className="mt-8">
            <CustomerFilters
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="mt-8">
            <CustomerTable
              customers={filteredCustomers}
              onDelete={fetchCustomers}
              onEdit={(customer) => {
                setSelectedCustomer(customer);
                setShowAddModal(true);
              }}
            />
          </div>
        </>
      )}

      {showAddModal && (
        <AddCustomerModal
          customer={selectedCustomer}
          onClose={() => {
            setShowAddModal(false);
            setSelectedCustomer(undefined);
          }}
          onSuccess={fetchCustomers}
        />
      )}
    </DashboardLayout>
  );
}

export default Customers;