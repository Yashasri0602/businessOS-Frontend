function SuggestedProducts() {
  return (
    <div className="mt-10">

      <h2 className="mb-6 text-3xl font-bold text-white">
        You may also like
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {[
          "Wireless Earbuds",
          "Laptop Stand",
          "USB Hub",
        ].map((item) => (

          <div
            key={item}
            className="rounded-3xl border border-[#243652] bg-[#14233A] p-6"
          >

            <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-[#1B2C47] text-6xl">
              📦
            </div>

            <h3 className="text-lg font-bold">
              {item}
            </h3>

            <p className="mt-3 text-[#C7F464]">
              ₹999
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SuggestedProducts;