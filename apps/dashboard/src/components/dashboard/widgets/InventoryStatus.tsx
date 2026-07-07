interface Props {
  inventory: {
    inStock: number;
    lowStock: number;
    outOfStock: number;
  };
}

function InventoryStatus({ inventory }: Props) {
  const inventoryItems = [
    {
      name: "In Stock",
      value: inventory.inStock,
      color: "bg-green-500",
    },
    {
      name: "Low Stock",
      value: inventory.lowStock,
      color: "bg-yellow-500",
    },
    {
      name: "Out of Stock",
      value: inventory.outOfStock,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Inventory Status
      </h2>

      <div className="space-y-6">
        {inventoryItems.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">{item.name}</span>

              <span className="font-semibold text-[#C7F464]">
                {item.value}
              </span>
            </div>

            <div className="h-3 rounded-full bg-[#081120]">
              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{
                  width: `${Math.min(item.value * 10, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-[#081120] p-5">
        <h3 className="font-semibold text-[#C7F464]">
          🤖 AI Suggestion
        </h3>

        <p className="mt-3 text-slate-300">
          AI insights coming soon...
        </p>
      </div>

    </div>
  );
}

export default InventoryStatus;