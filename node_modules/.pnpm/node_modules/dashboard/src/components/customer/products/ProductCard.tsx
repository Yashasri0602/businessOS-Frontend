interface Props {
  name: string;
  price: string;
  category: string;
}

function ProductCard({
  name,
  price,
  category,
}: Props) {
  return (
    <div className="group rounded-3xl border border-[#243652] bg-[#14233A] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#C7F464]">

      <div className="flex h-56 items-center justify-center rounded-2xl bg-[#1B2C47] text-7xl">
        📦
      </div>

      <p className="mt-5 text-sm text-[#C7F464]">
        {category}
      </p>

      <h2 className="mt-2 text-xl font-bold">
        {name}
      </h2>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-2xl font-bold">
          {price}
        </span>

        <button className="rounded-xl bg-[#6C2BFF] px-5 py-2 transition hover:bg-[#C7F464] hover:text-black">
          Add
        </button>

      </div>

    </div>
  );
}

export default ProductCard;