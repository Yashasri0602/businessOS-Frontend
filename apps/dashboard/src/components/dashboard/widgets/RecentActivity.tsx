interface Props {
  revenue: number;
  orders: number;
  customers: number;
  products: number;
}

function RecentActivity({
  revenue,
  orders,
  customers,
  products,
}: Props) {
  const activities = [
    {
      icon: "🛒",
      title: `${orders} order(s) processed`,
      time: "Today",
    },
    {
      icon: "👥",
      title: `${customers} customer(s) registered`,
      time: "Today",
    },
    {
      icon: "📦",
      title: `${products} products in inventory`,
      time: "Live",
    },
    {
      icon: "💰",
      title: `Revenue ₹${revenue.toLocaleString()}`,
      time: "Updated",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-[#1A2A42] p-4"
          >
            <div className="text-2xl">
              {activity.icon}
            </div>

            <div className="flex-1">
              <p className="font-medium text-white">
                {activity.title}
              </p>

              <p className="text-sm text-slate-400">
                {activity.time}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;