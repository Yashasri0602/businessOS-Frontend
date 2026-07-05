function ComplaintForm() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold">

        Raise Complaint

      </h2>

      <input
        placeholder="Order ID"
        className="mb-5 w-full rounded-xl border border-[#243652] bg-[#1B2C47] p-4 outline-none"
      />

      <input
        placeholder="Complaint Title"
        className="mb-5 w-full rounded-xl border border-[#243652] bg-[#1B2C47] p-4 outline-none"
      />

      <textarea
        rows={5}
        placeholder="Describe your issue..."
        className="w-full rounded-xl border border-[#243652] bg-[#1B2C47] p-4 outline-none"
      />

      <button className="mt-6 rounded-2xl bg-[#C7F464] px-8 py-4 font-bold text-black">

        Submit Complaint

      </button>

    </div>
  );
}

export default ComplaintForm;