function DeliveryOptions() {

  return (

    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">

        Delivery

      </h2>

      {[
        "Standard Delivery (Free)",
        "Express Delivery (₹99)",
        "Same Day Delivery (₹199)",
      ].map((option) => (

        <label
          key={option}
          className="mb-4 flex cursor-pointer items-center gap-4 rounded-2xl bg-[#1B2C47] p-4"
        >

          <input type="radio" name="delivery" />

          {option}

        </label>

      ))}

    </div>

  );

}

export default DeliveryOptions;