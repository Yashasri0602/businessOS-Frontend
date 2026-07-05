const inventory = [
  {
    name: "In Stock",
    value: 860,
    color: "bg-green-500",
  },
  {
    name: "Low Stock",
    value: 104,
    color: "bg-yellow-500",
  },
  {
    name: "Out of Stock",
    value: 29,
    color: "bg-red-500",
  },
];

function InventoryStatus() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Inventory Status
      </h2>

      <div className="space-y-6">

        {inventory.map((item) => (

          <div
            key={item.name}
          >

            <div className="mb-2 flex justify-between">

              <span className="text-white">

                {item.name}

              </span>

              <span className="font-semibold text-[#C7F464]">

                {item.value}

              </span>

            </div>

            <div className="h-3 rounded-full bg-[#081120]">

              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{
                  width: `${Math.min(item.value / 10, 100)}%`,
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

          Restock Wireless Mouse within 2 days.

        </p>

      </div>

    </div>
  );
}

export default InventoryStatus;