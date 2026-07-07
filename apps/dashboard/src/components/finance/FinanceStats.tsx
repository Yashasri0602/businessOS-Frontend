interface ReportData {
  finance: {
    revenue: number;
    expenses: number;
    profit: number;
  };

  sales: {
    averageOrderValue: number;
  };
}

interface Props {
  report: ReportData | null;
}

function FinanceStats({ report }: Props) {
  if (!report) return null;

  const cards = [
    {
      title: "Revenue",
      value: `₹${report.finance.revenue.toLocaleString()}`,
    },
    {
      title: "Expenses",
      value: `₹${report.finance.expenses.toLocaleString()}`,
    },
    {
      title: "Profit",
      value: `₹${report.finance.profit.toLocaleString()}`,
    },
    {
      title: "Avg Order",
      value: `₹${report.sales.averageOrderValue.toLocaleString()}`,
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

export default FinanceStats;