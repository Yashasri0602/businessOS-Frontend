function QuantitySelector() {
  return (
    <div className="mt-10 flex w-fit items-center gap-8 rounded-2xl border border-[#243652] bg-[#14233A] px-8 py-4">

      <button className="text-3xl">
        -
      </button>

      <span className="text-2xl font-bold">
        1
      </span>

      <button className="text-3xl">
        +
      </button>

    </div>
  );
}

export default QuantitySelector;