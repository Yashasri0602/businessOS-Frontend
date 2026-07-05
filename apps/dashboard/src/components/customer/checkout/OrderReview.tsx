function OrderReview() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Order Review
      </h2>

      {[
        "Wireless Mouse x2",
        "Mechanical Keyboard x1",
        "Laptop Stand x1",
      ].map((item) => (

        <div
          key={item}
          className="mb-4 flex justify-between"
        >

          <span>{item}</span>

          <span>₹999</span>

        </div>

      ))}

    </div>
  );
}

export default OrderReview;