interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

function OrderFilters({
  search,
  setSearch,
  status,
  setStatus,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-[#243652] bg-[#14233A] p-6 md:flex-row md:justify-between">

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-xl bg-[#081120] px-4 py-3 text-white"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="rounded-xl bg-[#081120] px-4 py-3 text-white"
      >
        <option value="All">
          All Status
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="Processing">
          Processing
        </option>

        <option value="Completed">
          Completed
        </option>

        <option value="Cancelled">
          Cancelled
        </option>
      </select>

    </div>
  );
}

export default OrderFilters;