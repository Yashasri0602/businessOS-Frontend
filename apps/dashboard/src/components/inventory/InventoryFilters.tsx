interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function InventoryFilters({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-[#243652] bg-[#14233A] p-6 md:flex-row md:items-center md:justify-between">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-[#243652] bg-[#081120] px-4 py-3 text-white outline-none focus:border-[#C7F464] md:w-80"
      />

      <select
        className="rounded-xl border border-[#243652] bg-[#081120] px-4 py-3 text-white"
      >
        <option>All Categories</option>
      </select>
    </div>
  );
}

export default InventoryFilters;