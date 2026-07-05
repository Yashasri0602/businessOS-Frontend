function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#081120] py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <span className="inline-flex rounded-full border border-[#243652] bg-[#14233A] px-4 py-2 text-sm text-[#C7F464]">
            🚀 AI Powered Business Platform
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">

            Run Your Business

            <span className="block text-[#C7F464]">
              Automatically.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">

            BusinessOS AI connects inventory,
            customers, employees, finance and AI
            into one intelligent operating system.

            Every customer order automatically updates
            inventory, revenue, reports and analytics
            without any manual work.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-[#C7F464] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">

              Get Started

            </button>

            <button className="rounded-xl border border-[#243652] px-8 py-4 text-white transition duration-300 hover:bg-[#14233A]">

              Watch Demo

            </button>

          </div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-10">

            <div>

              <h2 className="text-3xl font-bold text-[#C7F464]">
                500+
              </h2>

              <p className="text-slate-400">
                Businesses
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#C7F464]">
                99%
              </h2>

              <p className="text-slate-400">
                Automation
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#C7F464]">
                24/7
              </h2>

              <p className="text-slate-400">
                AI Assistant
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          {/* Glow */}

          <div className="absolute h-130 w-130 rounded-full bg-[#C7F464]/10 blur-[130px]" />

          {/* Revenue */}

          <div className="absolute -left-8 top-6 z-20 rounded-2xl border border-[#243652] bg-[#14233A] p-5 shadow-xl">

            <p className="text-sm text-slate-400">
              Revenue
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              ₹2.4L
            </h2>

            <p className="mt-1 text-[#C7F464]">
              +18%
            </p>

          </div>

          {/* Orders */}

          <div className="absolute -right-8 top-32 z-20 rounded-2xl border border-[#243652] bg-[#14233A] p-5 shadow-xl">

            <p className="text-sm text-slate-400">
              Orders
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              428
            </h2>

          </div>

          {/* AI */}

          <div className="absolute bottom-20 left-0 z-20 rounded-2xl border border-[#243652] bg-[#14233A] p-5 shadow-xl">

            <p className="text-sm text-slate-400">
              AI Alerts
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#C7F464]">
              4
            </h2>

          </div>

          {/* Inventory */}

          <div className="absolute bottom-2 right-4 z-20 rounded-2xl border border-[#243652] bg-[#14233A] p-5 shadow-xl">

            <p className="text-sm text-slate-400">
              Inventory
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              96%
            </h2>

          </div>

          {/* IMAGE PLACEHOLDER */}

          <div className="relative z-10 flex h-140 w-140 items-center justify-center rounded-4xl border border-[#243652] bg-[#14233A]">

            <div className="text-center">

              <div className="text-8xl">
                🖥️
              </div>

              <h2 className="mt-8 text-3xl font-bold text-white">
                Dashboard Screenshot
              </h2>

              <p className="mt-4 text-slate-400">

                Replace with AI Generated Dashboard Image

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;