function RevenueChart() {
  const data = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 78 },
    { month: "May", value: 92 },
    { month: "Jun", value: 118 },
  ];

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Revenue Overview
          </h2>

          <p className="mt-2 text-slate-400">
            Last 6 months performance
          </p>

        </div>

        <div className="rounded-xl bg-[#081120] px-4 py-2 text-[#C7F464]">
          +18%
        </div>

      </div>

      <div className="flex h-80 items-end gap-5">

        {data.map((item) => (

          <div
            key={item.month}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="w-full rounded-t-xl bg-[#C7F464] transition hover:bg-lime-300"
              style={{
                height: `${item.value}%`,
              }}
            />

            <span className="mt-4 text-slate-400">

              {item.month}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RevenueChart;