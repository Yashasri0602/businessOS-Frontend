function EmptyOrders() {
  return (
    <div className="flex h-125 flex-col items-center justify-center">

      <div className="text-8xl">
        📦
      </div>

      <h2 className="mt-6 text-3xl font-bold">
        No Orders Yet
      </h2>

      <p className="mt-3 text-slate-400">
        Your orders will appear here after checkout.
      </p>

    </div>
  );
}

export default EmptyOrders;