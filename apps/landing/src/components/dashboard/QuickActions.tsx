function QuickActions() {
  const actions = [
    "➕ Add Product",
    "👤 Add Employee",
    "📦 New Order",
    "📊 Generate Report",
  ];

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Quick Actions
      </h3>

      <div className="mt-6 grid gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-xl bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;