function RelatedProducts() {

  const products = [
    "Gaming Mouse",
    "Mechanical Keyboard",
    "Laptop Stand",
    "USB Hub",
  ];

  return (

    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-bold">

        Related Products

      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {products.map((product)=>(

          <div
            key={product}
            className="rounded-3xl border border-[#243652] bg-[#14233A] p-5 transition hover:-translate-y-2 hover:border-[#C7F464]"
          >

            <div className="flex h-48 items-center justify-center rounded-2xl bg-[#081120] text-6xl">

              📦

            </div>

            <h3 className="mt-5 text-xl font-bold">

              {product}

            </h3>

            <p className="mt-3 text-[#C7F464]">

              ₹1,499

            </p>

            <button className="mt-5 w-full rounded-xl bg-[#C7F464] py-3 font-semibold text-black">

              View Product

            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default RelatedProducts;