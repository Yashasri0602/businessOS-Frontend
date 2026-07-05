function QuickActions() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <button className="w-full rounded-xl bg-[#C7F464] py-3 font-semibold text-black">
          Add Product
        </button>

        <button className="w-full rounded-xl bg-[#6C2BFF] py-3 font-semibold text-white">
          Create Order
        </button>

        <button className="w-full rounded-xl bg-[#6C2BFF] py-3 font-semibold text-white">
          Add Customer
        </button>

        <button className="w-full rounded-xl bg-[#6C2BFF] py-3 font-semibold text-white">
          Generate Report
        </button>

      </div>

    </div>
  );
}

export default QuickActions;