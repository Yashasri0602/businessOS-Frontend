function Problem() {
  const problems = [
    {
      emoji: "📦",
      title: "Inventory Confusion",
      text: "Business owners manually update stock after every order."
    },
    {
      emoji: "📈",
      title: "Revenue Tracking",
      text: "Sales, profit and expenses are scattered across multiple apps."
    },
    {
      emoji: "👥",
      title: "Customer Management",
      text: "Orders, complaints and follow-ups become difficult to manage."
    },
    {
      emoji: "⏰",
      title: "Time Wasted",
      text: "Owners spend hours updating spreadsheets instead of growing the business."
    }
  ];

  return (
    <section className="bg-[#081120] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">
          THE PROBLEM
        </span>

        <h2 className="mt-8 max-w-3xl text-5xl font-bold text-white leading-tight">

          Running a Business
          <br />

          Shouldn't Feel Like
          <span className="text-[#C7F464]"> Managing Chaos.</span>

        </h2>

        <p className="mt-6 max-w-2xl text-xl text-slate-400">

          Every sale creates multiple manual tasks.
          Update inventory.
          Calculate revenue.
          Record customer details.
          Manage employees.
          Business owners waste hours doing repetitive work.

        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {problems.map((problem) => (

            <div
              key={problem.title}
              className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C7F464]"
            >

              <div className="text-5xl">
                {problem.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {problem.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-8">
                {problem.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Problem;