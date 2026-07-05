function RevenueChart() {
  const bars = [45, 70, 55, 90, 65, 100, 80];

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Revenue Analytics
          </h3>
          <p className="text-sm text-gray-400">
            Last 7 Days
          </p>
        </div>

        <span className="text-green-400 font-semibold">
          +18%
        </span>
      </div>

      <div className="mt-8 flex h-48 items-end justify-between gap-3">
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-lg bg-linear-to-t from-violet-700 to-violet-400 transition-all duration-300 hover:opacity-80"
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

export default RevenueChart;