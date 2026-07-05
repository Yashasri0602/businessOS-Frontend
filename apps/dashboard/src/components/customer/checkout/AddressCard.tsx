function AddressCard() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Delivery Address
        </h2>

        <button className="text-[#C7F464]">
          Change
        </button>

      </div>

      <div className="mt-6 space-y-2 text-slate-300">

        <p className="font-semibold text-white">
          Shivaranjani Kankati
        </p>

        <p>
          Hyderabad, Telangana
        </p>

        <p>
          500081
        </p>

        <p>
          +91 9876543210
        </p>

      </div>

    </div>
  );
}

export default AddressCard;