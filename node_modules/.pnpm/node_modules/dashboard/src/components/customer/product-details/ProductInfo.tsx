function ProductInfo() {
  return (
    <div>

      <p className="text-[#C7F464]">
        Electronics
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        Wireless Gaming Headphones
      </h1>

      <div className="mt-5 flex items-center gap-4">

        <span className="text-yellow-400">
          ⭐⭐⭐⭐⭐
        </span>

        <span className="text-slate-400">
          (124 Reviews)
        </span>

      </div>

      <div className="mt-8 flex items-center gap-6">

        <span className="text-5xl font-bold">
          ₹2,499
        </span>

        <span className="rounded-full bg-[#C7F464] px-4 py-2 font-semibold text-black">
          18% OFF
        </span>

      </div>

      <p className="mt-8 leading-8 text-slate-300">

        Premium wireless gaming headset with deep bass,
        40-hour battery life and ultra-low latency.

      </p>

      <div className="mt-8">

        <span className="rounded-full bg-green-500 px-4 py-2 font-semibold">
          In Stock
        </span>

      </div>

    </div>
  );
}

export default ProductInfo;