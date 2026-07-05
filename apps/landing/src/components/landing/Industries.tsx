const industries = [
  {
    emoji: "🛒",
    title: "Retail Store",
    desc: "Inventory, billing, suppliers and AI stock prediction.",
  },
  {
    emoji: "🍔",
    title: "Restaurants",
    desc: "Orders, kitchen inventory and customer management.",
  },
  {
    emoji: "🏥",
    title: "Medical Store",
    desc: "Medicine stock, expiry alerts and supplier tracking.",
  },
  {
    emoji: "💇",
    title: "Salon & Spa",
    desc: "Appointments, staff schedules and revenue insights.",
  },
  {
    emoji: "👕",
    title: "Fashion Boutique",
    desc: "Manage products, sizes, sales and customers.",
  },
  {
    emoji: "💻",
    title: "Electronics",
    desc: "Warranty, inventory, repairs and customer support.",
  },
];

function Industries() {
  return (
    <section id="solutions" className="bg-[#081120] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">
            INDUSTRIES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Built For Every
            <span className="block text-[#C7F464]">
              Growing Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            One platform that adapts to every business.
            No matter what you sell, BusinessOS AI works
            the way your business works.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C7F464]"
            >

              <div className="text-5xl">

                {item.emoji}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 leading-8 text-slate-400">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;