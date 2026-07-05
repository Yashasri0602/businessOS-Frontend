function CartHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Shopping Cart
        </h1>

        <p className="mt-2 text-slate-400">
          3 Products in your cart
        </p>

      </div>

      <button className="rounded-xl border border-[#243652] px-5 py-3 text-slate-300 transition hover:border-[#C7F464] hover:text-white">
        ← Continue Shopping
      </button>

    </div>
  );
}

export default CartHeader;