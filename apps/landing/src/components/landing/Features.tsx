const features = [
  {
    icon: "📦",
    title: "Smart Inventory",
    desc: "Track inventory in real time with automatic stock updates.",
  },
  {
    icon: "🛒",
    title: "Order Management",
    desc: "Handle customer orders from one intelligent dashboard.",
  },
  {
    icon: "👥",
    title: "Customer CRM",
    desc: "Manage customers, complaints and purchase history.",
  },
  {
    icon: "💰",
    title: "Finance",
    desc: "Revenue, expenses and profit updated automatically.",
  },
  {
    icon: "🤖",
    title: "AI Business Assistant",
    desc: "Receive business insights and smart recommendations.",
  },
  {
    icon: "📈",
    title: "Analytics",
    desc: "Interactive dashboards with live business metrics.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-[#0A1425] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">
            FEATURES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Everything Your Business
            <span className="block text-[#C7F464]">
              Needs In One Place
            </span>
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 transition hover:-translate-y-2 hover:border-[#C7F464]"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;