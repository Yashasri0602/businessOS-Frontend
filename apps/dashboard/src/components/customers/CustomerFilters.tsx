interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function CustomerFilters({
  search,
  setSearch,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-6">
      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-[#243652] bg-[#081120] px-4 py-3 text-white outline-none focus:border-[#C7F464]"
      />
    </div>
  );
}

export default CustomerFilters;