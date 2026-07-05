function EmptyCart() {
  return (
    <div className="flex h-125 flex-col items-center justify-center">

      <div className="text-8xl">
        🛒
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Your cart is empty
      </h2>

      <p className="mt-3 text-slate-400">
        Looks like you haven't added anything yet.
      </p>

      <button className="mt-8 rounded-2xl bg-[#C7F464] px-8 py-4 font-bold text-black">
        Continue Shopping
      </button>

    </div>
  );
}

export default EmptyCart;