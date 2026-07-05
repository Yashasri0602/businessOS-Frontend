function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Customer Places Order",
      description:
        "Customer orders through the customer portal or scans a QR code."
    },
    {
      number: "02",
      title: "Inventory Updates",
      description:
        "Product stock decreases automatically without manual entry."
    },
    {
      number: "03",
      title: "Revenue Updates",
      description:
        "Sales, revenue and profit are recalculated instantly."
    },
    {
      number: "04",
      title: "AI Takes Action",
      description:
        "BusinessOS predicts stock shortages and notifies the owner."
    }
  ];

  return (
    <section id="workflow" className="bg-[#0A1425] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">

          HOW IT WORKS

        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">

          One Customer Action.

          <span className="block text-[#C7F464]">

            Everything Updates Automatically.

          </span>

        </h2>

        <p className="mt-6 max-w-3xl text-xl text-slate-400">

          Business owners never update inventory,
          revenue or reports manually again.

        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl border border-[#243652] bg-[#14233A] p-8"
            >

              <div className="text-5xl font-black text-[#C7F464]">

                {step.number}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {step.title}

              </h3>

              <p className="mt-4 leading-8 text-slate-400">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;