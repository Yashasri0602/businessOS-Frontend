function InventoryStats() {
  const stats = [
    {
      title: "Total Products",
      value: "1,248",
      color: "text-[#C7F464]",
    },
    {
      title: "Active Products",
      value: "1,180",
      color: "text-green-400",
    },
    {
      title: "Low Stock",
      value: "46",
      color: "text-yellow-400",
    },
    {
      title: "Out of Stock",
      value: "22",
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7F464]"
        >

          <p className="text-slate-400">

            {item.title}

          </p>

          <h2 className={`mt-5 text-5xl font-bold ${item.color}`}>

            {item.value}

          </h2>

        </div>

      ))}

    </div>
  );
}

export default InventoryStats;