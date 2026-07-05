function CTA() {
  return (
    <section className="bg-[#081120] py-32">

      <div className="mx-auto max-w-6xl rounded-[40px] border border-[#243652] bg-[#14233A] px-12 py-20 text-center">

        <span className="rounded-full border border-[#243652] bg-[#1A2A45] px-4 py-2 text-sm text-[#C7F464]">
          GET STARTED
        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">

          Ready To Run Your
          <span className="block text-[#C7F464]">
            Business Automatically?
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

          Join the next generation of businesses using AI to
          automate inventory, employees, customers,
          finance and analytics.

        </p>

        <div className="mt-12 flex justify-center gap-6">

          <button className="rounded-xl bg-[#C7F464] px-10 py-4 font-semibold text-black transition hover:scale-105">

            Get Started

          </button>

          <button className="rounded-xl border border-[#243652] px-10 py-4 text-white hover:bg-[#1A2A45]">

            Book Demo

          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;