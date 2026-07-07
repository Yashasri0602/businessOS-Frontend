interface Props {
  report: any;
}

function CustomerReport({ report }: Props) {
  const customers = report.customers;

  const topCustomer =
    customers.topCustomersByValue?.[0];

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Customer Report
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div>

          <p className="text-slate-400">
            Customers
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {customers.totalCustomers}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Top Customer
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {topCustomer?.name || "N/A"}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Orders
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {topCustomer?.orderCount || 0}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default CustomerReport;