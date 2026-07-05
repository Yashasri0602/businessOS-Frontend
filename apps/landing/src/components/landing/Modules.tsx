function Modules() {
  const modules = [
    {
      title: "Inventory Management",
      desc: "Track stock, suppliers, warehouses and receive AI restock predictions.",
      icon: "📦",
    },
    {
      title: "Customer Management",
      desc: "Store customer profiles, purchase history and complaints in one place.",
      icon: "👥",
    },
    {
      title: "Employee Management",
      desc: "Attendance, payroll, roles and employee performance tracking.",
      icon: "👨‍💼",
    },
    {
      title: "Orders & Billing",
      desc: "Automatically process customer orders, invoices and payments.",
      icon: "🧾",
    },
    {
      title: "Business Analytics",
      desc: "Revenue, profit, expenses and sales insights updated in real time.",
      icon: "📈",
    },
    {
      title: "AI Business Assistant",
      desc: "Ask anything about your business and receive instant recommendations.",
      icon: "🤖",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#081120] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <span className="rounded-full border border-[#243652] bg-[#14233A] px-4 py-2 text-sm text-[#C7F464]">
          BUSINESS MODULES
        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">
          Everything You Need
          <span className="block text-[#C7F464]">
            In One Platform
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-slate-400">
          Every department of your business connected into one AI-powered operating system.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C7F464]"
            >
              <div className="text-5xl">
                {module.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {module.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {module.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Modules;