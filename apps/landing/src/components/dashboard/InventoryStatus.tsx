import { inventoryData } from "../../mock/inventory";

function InventoryStatus() {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Inventory Status
      </h3>

      <div className="mt-6 space-y-5">
        {inventoryData.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm text-white">
              <span>{item.name}</span>
              <span>{item.stock}%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.stock}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryStatus;