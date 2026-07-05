function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#243652] bg-linear-to-r from-[#14233A] via-[#1B2C47] to-[#14233A] p-10">

      <div className="max-w-2xl">

        <p className="mb-3 text-[#C7F464] font-semibold">
          Summer Collection
        </p>

        <h1 className="text-5xl font-bold leading-tight text-white">
          Shop Everything
          <br />
          Your Business Offers
        </h1>

        <p className="mt-5 text-lg text-slate-300">
          Electronics, Fashion, Grocery, Home Essentials and more.
        </p>

        <button className="mt-8 rounded-2xl bg-[#C7F464] px-8 py-4 font-semibold text-black transition hover:scale-105">
          Shop Now
        </button>

      </div>

      <div className="absolute right-0 top-0 h-full w-72 rounded-full bg-[#C7F464]/10 blur-3xl"/>

    </section>
  );
}

export default HeroBanner;