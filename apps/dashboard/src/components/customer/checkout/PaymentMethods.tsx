function PaymentMethods() {

  const methods = [
    "UPI",
    "Credit Card",
    "Debit Card",
    "Wallet",
    "Cash on Delivery",
  ];

  return (

    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">

        Payment Method

      </h2>

      {methods.map((method) => (

        <label
          key={method}
          className="mb-4 flex cursor-pointer items-center gap-4 rounded-2xl bg-[#1B2C47] p-4"
        >

          <input type="radio" name="payment" />

          {method}

        </label>

      ))}

    </div>

  );

}

export default PaymentMethods;