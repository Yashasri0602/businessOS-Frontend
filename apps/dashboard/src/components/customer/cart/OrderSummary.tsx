function OrderSummary() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      {[
        ["Subtotal", "₹3,200"],
        ["Discount", "-₹200"],
        ["Delivery", "₹50"],
        ["GST", "₹90"],
      ].map(([label, value]) => (

        <div
          key={label}
          className="mb-4 flex justify-between text-slate-300"
        >
          <span>{label}</span>

          <span>{value}</span>

        </div>

      ))}

      <hr className="my-6 border-[#243652]" />

      <div className="mb-8 flex justify-between text-2xl font-bold">

        <span>Total</span>

        <span className="text-[#C7F464]">
          ₹3,140
        </span>

      </div>

      <button className="w-full rounded-2xl bg-[#C7F464] py-4 font-bold text-black transition hover:scale-[1.02]">
        Proceed To Checkout
      </button>

    </div>
  );
}

export default OrderSummary;