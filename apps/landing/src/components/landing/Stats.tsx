const stats = [
  {
    number: "500+",
    label: "Businesses Using BusinessOS",
  },
  {
    number: "50K+",
    label: "Orders Processed",
  },
  {
    number: "99%",
    label: "Automation Accuracy",
  },
  {
    number: "24/7",
    label: "AI Business Assistant",
  },
];

function Stats() {
  return (
    <section className="bg-[#081120] py-24">

      <div className="mx-auto grid max-w-7xl gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.label}
            className="rounded-3xl border border-[#22324A] bg-[#14233A] p-10 text-center"
          >

            <h2 className="text-5xl font-bold text-[#C7F464]">
              {item.number}
            </h2>

            <p className="mt-5 text-slate-300">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;