function PriceBreakdown() {

  const rows = [
    ["Subtotal", "₹4,196"],
    ["Discount", "-₹300"],
    ["Delivery", "Free"],
    ["GST", "₹152"],
  ];

  return (

    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Payment Summary
      </h2>

      {rows.map(([label, value]) => (

        <div
          key={label}
          className="mb-4 flex justify-between text-slate-300"
        >

          <span>{label}</span>

          <span>{value}</span>

        </div>

      ))}

      <hr className="my-6 border-[#243652]" />

      <div className="flex justify-between text-2xl font-bold">

        <span>Total</span>

        <span className="text-[#C7F464]">
          ₹4,048
        </span>

      </div>

    </div>

  );

}

export default PriceBreakdown;