interface Props {
  report: any;
}

function SalesReport({ report }: Props) {
  const sales = report.sales;

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Sales Report
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <p className="text-slate-400">
            Revenue
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹{sales.totalRevenue.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Completed Orders
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {sales.completedOrders}
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Average Order
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹{sales.averageOrderValue.toLocaleString()}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default SalesReport;