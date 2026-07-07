interface Props {
  revenue: number;
  orders: number;
  customers: number;
  expenses: number;
}

function RevenueChart({
  revenue,
  orders,
  customers,
  expenses,
}: Props) {
  const data = [
    {
      label: "Revenue",
      value: revenue,
    },
    {
      label: "Orders",
      value: orders,
    },
    {
      label: "Customers",
      value: customers,
    },
    {
      label: "Expenses",
      value: expenses,
    },
  ];

  const max = Math.max(
    ...data.map((d) => d.value),
    1
  );

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Revenue Overview
        </h2>

        <p className="mt-2 text-slate-400">
          Live business performance
        </p>

      </div>

      <div className="flex h-56 items-end gap-8">

        {data.map((item) => (

          <div
            key={item.label}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="flex w-full items-end justify-center rounded-t-xl bg-[#C7F464] transition-all"
              style={{
                height: `${(item.value / max) * 100}%`,
                minHeight: "8px",
              }}
            >

              <span className="mb-2 text-xs font-bold text-black">
                {item.label === "Revenue" || item.label === "Expenses"
                    ? `₹${item.value.toLocaleString()}` 
                    : item.value}
              </span>

            </div>

            <span className="mt-4 text-slate-400">
              {item.label}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RevenueChart;