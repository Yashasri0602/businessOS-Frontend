interface Props {
  name: string;
  price: string;
  quantity: number;
}

function CartItem({
  name,
  price,
  quantity,
}: Props) {
  return (
    <div className="mb-6 rounded-3xl border border-[#243652] bg-[#14233A] p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#1B2C47] text-5xl">
            📦
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              {name}
            </h2>

            <p className="mt-2 text-slate-400">
              Premium Product
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <button className="h-10 w-10 rounded-xl bg-[#1B2C47]">
            -
          </button>

          <span className="text-xl font-bold">
            {quantity}
          </span>

          <button className="h-10 w-10 rounded-xl bg-[#C7F464] text-black">
            +
          </button>

        </div>

        <div className="text-right">

          <p className="text-2xl font-bold text-white">
            {price}
          </p>

          <button className="mt-2 text-red-400">
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;