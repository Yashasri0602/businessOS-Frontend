function RecentActivity() {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold text-white">
        Recent Activity
      </h3>

      <div className="mt-4 space-y-4 text-sm text-gray-300">
        <p>✅ Order #1024 completed</p>
        <p>👤 New employee added</p>
        <p>💰 ₹24,500 revenue today</p>
        <p>📦 Inventory updated</p>
      </div>
    </div>
  );
}

export default RecentActivity;