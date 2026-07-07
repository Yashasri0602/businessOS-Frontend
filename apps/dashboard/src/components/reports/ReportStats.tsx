interface Props {
  report: any;
}

function ReportStats({ report }: Props) {
  if (!report) return null;

  const cards = [
    {
      title: "Products",
      value: report.inventory.totalProducts,
    },
    {
      title: "Customers",
      value: report.customers.totalCustomers,
    },
    {
      title: "Orders",
      value: report.sales.totalOrders,
    },
    {
      title: "Employees",
      value: report.employees.totalEmployees,
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

export default ReportStats;