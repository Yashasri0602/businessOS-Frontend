function Notifications() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Notifications
      </h2>

      {[
        "New order received",
        "Inventory updated",
        "Employee attendance synced",
      ].map((n) => (

        <div
          key={n}
          className="mb-4 rounded-xl bg-[#1B2C47] p-4"
        >
          🔔 {n}
        </div>

      ))}

    </div>
  );
}

export default Notifications;