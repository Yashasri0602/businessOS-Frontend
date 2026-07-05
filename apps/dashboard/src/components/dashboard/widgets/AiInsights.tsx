function AIInsights() {

  const insights = [
    "Revenue increased by 18% compared to last week.",
    "Wireless Mouse stock will finish in 2 days.",
    "Weekend demand is expected to increase by 23%.",
    "Premium customers generated 42% of today's sales.",
  ];

  return (

    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">

          🤖 AI Business Assistant

        </h2>

        <p className="mt-2 text-slate-400">

          Smart recommendations generated today

        </p>

      </div>

      <div className="space-y-5">

        {insights.map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-[#081120] p-5"
          >

            <p className="text-slate-300">

              {item}

            </p>

          </div>

        ))}

      </div>

      <button className="mt-8 w-full rounded-2xl bg-[#C7F464] py-4 font-semibold text-black transition hover:scale-105">

        Open AI Assistant

      </button>

    </div>

  );

}

export default AIInsights;