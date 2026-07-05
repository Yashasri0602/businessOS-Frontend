function AIAssistant() {
  return (
    <section
      className="bg-[#081120] py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full border border-[#243652] bg-[#14233A] px-4 py-2 text-sm text-[#C7F464]">
            AI BUSINESS ASSISTANT
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">

            Ask AI Anything

            <span className="block text-[#C7F464]">
              About Your Business
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">

            Business owners don't need to search
            reports anymore.

            Just ask naturally.

          </p>

          <div className="mt-10 space-y-5">

            <div className="rounded-xl border border-[#243652] bg-[#14233A] p-5 text-white">
              💬 Which products will run out this week?
            </div>

            <div className="rounded-xl border border-[#243652] bg-[#14233A] p-5 text-white">
              💬 Show today's revenue.
            </div>

            <div className="rounded-xl border border-[#243652] bg-[#14233A] p-5 text-white">
              💬 Which employee performed best?
            </div>

            <div className="rounded-xl border border-[#243652] bg-[#14233A] p-5 text-white">
              💬 Predict next week's sales.
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-[30px] border border-[#243652] bg-[#14233A] p-10">

          <div className="mb-8 text-center">

            <div className="text-7xl">
              🤖
            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">

              AI Chat Preview

            </h3>

            <p className="mt-3 text-slate-400">

              Replace with AI chat screenshot

            </p>

          </div>

          <div className="rounded-xl bg-[#0F1B30] p-5 text-slate-300">

            <p className="mb-3 text-[#C7F464]">

              BusinessOS AI

            </p>

            Revenue increased by 18%.

            Inventory for Wireless Mouse is low.

            Weekend sales are expected to grow by 23%.

          </div>

        </div>

      </div>
    </section>
  );
}

export default AIAssistant;