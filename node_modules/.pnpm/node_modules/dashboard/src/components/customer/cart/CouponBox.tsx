function CouponBox() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-6">

      <h2 className="mb-5 text-xl font-bold">
        Coupon
      </h2>

      <div className="flex gap-4">

        <input
          placeholder="Enter coupon code"
          className="flex-1 rounded-xl border border-[#243652] bg-[#1B2C47] px-4 py-3 outline-none"
        />

        <button className="rounded-xl bg-[#6C2BFF] px-6 font-semibold">
          Apply
        </button>

      </div>

    </div>
  );
}

export default CouponBox;