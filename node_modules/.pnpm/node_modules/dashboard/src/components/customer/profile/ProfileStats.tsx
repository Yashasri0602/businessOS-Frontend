const stats = [
  ["Orders", "18"],
  ["Spent", "₹42,900"],
  ["Wishlist", "9"],
];

function ProfileStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      {stats.map(([title, value]) => (

        <div
          key={title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 text-center"
        >

          <h2 className="text-4xl font-bold text-[#C7F464]">

            {value}

          </h2>

          <p className="mt-3 text-slate-400">

            {title}

          </p>

        </div>

      ))}

    </div>
  );
}

export default ProfileStats;