function WhyChooseUs() {
  const benefits = [
    {
      title: "Everything in One Platform",
      text: "Inventory, customers, employees, finance and AI work together instead of using multiple apps."
    },
    {
      title: "AI That Actually Helps",
      text: "Predict stock shortages, analyze revenue trends and receive smart business recommendations."
    },
    {
      title: "Automatic Business Updates",
      text: "Every customer order updates inventory, sales, profits and reports instantly."
    },
    {
      title: "Made For Every Business",
      text: "Retail stores, restaurants, pharmacies, supermarkets, boutiques and more."
    }
  ];

  return (
    <section className="bg-[#081120] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">
              WHY BUSINESSOS AI
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

              One Platform.

              <span className="block text-[#C7F464]">
                Unlimited Possibilities.
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              Stop switching between spreadsheets,
              billing software, inventory software,
              employee management tools and analytics.

              BusinessOS AI combines everything into
              one intelligent operating system.

            </p>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            {benefits.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-[#243652] bg-[#14233A] p-8 transition hover:border-[#C7F464]"
              >

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-400">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;