function FAQ() {
  const faqs = [
    {
      q: "Can BusinessOS AI be customized?",
      a: "Yes. Business owners can enable only the modules they need, such as inventory, employees, customers, finance, or analytics.",
    },
    {
      q: "Does customer activity update the dashboard automatically?",
      a: "Yes. Every customer order instantly updates inventory, revenue, reports, analytics and AI insights.",
    },
    {
      q: "Can AI predict future sales and stock?",
      a: "Yes. BusinessOS AI analyzes sales history and provides smart predictions for inventory and revenue.",
    },
    {
      q: "Is this suitable for small businesses?",
      a: "Absolutely. BusinessOS AI is designed for startups, retail shops, restaurants, wholesalers and growing businesses.",
    },
  ];

  return (
    <section id="faq" className="bg-[#081120] py-32">
      <div className="mx-auto max-w-5xl px-8">

        <span className="rounded-full border border-[#243652] bg-[#14233A] px-4 py-2 text-sm text-[#C7F464]">
          FAQ
        </span>

        <h2 className="mt-8 text-center text-5xl font-bold text-white">
          Frequently Asked
          <span className="block text-[#C7F464]">
            Questions
          </span>
        </h2>

        <div className="mt-20 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-[#243652] bg-[#14233A] p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {faq.q}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;