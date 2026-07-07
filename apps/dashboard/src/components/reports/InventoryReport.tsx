interface Props {
  report: any;
}

function InventoryReport({ report }: Props) {
  const inventory = report.inventory;

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Inventory Report
      </h2>

      <div className="grid gap-6 md:grid-cols-4">

        <div>

          <p className="text-slate-400">
            Products
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {inventory.totalProducts}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Stock Units
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {inventory.totalStockUnits}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Inventory Value
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            ₹{inventory.inventoryValueAtSelling.toLocaleString()}
          </h3>

        </div>

        <div>

          <p className="text-slate-400">
            Low Stock
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {inventory.lowStockProducts.length}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default InventoryReport;