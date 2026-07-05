import CustomerLayout from "../../layouts/CustomerLayout";

function Home() {
  const categories = [
    "💻 Electronics",
    "🛒 Groceries",
    "👕 Fashion",
    "💊 Medical",
    "📚 Stationery",
    "🏠 Home",
  ];

  const products = [
    {
      name: "Wireless Mouse",
      price: "₹899",
      stock: "24 Left",
    },
    {
      name: "Mechanical Keyboard",
      price: "₹2,499",
      stock: "12 Left",
    },
    {
      name: "USB-C Hub",
      price: "₹1,199",
      stock: "38 Left",
    },
    {
      name: "Laptop Stand",
      price: "₹999",
      stock: "16 Left",
    },
  ];

  return (
    <CustomerLayout>

      {/* Hero */}

      <section className="rounded-3xl border border-[#243652] bg-[#14233A] p-10">

        <p className="text-[#C7F464]">
          Welcome Back 👋
        </p>

        <h1 className="mt-3 text-5xl font-bold">

          Find Everything

          <span className="block text-[#C7F464]">

            You Need.

          </span>

        </h1>

        <p className="mt-6 max-w-2xl text-slate-400">

          Browse products from your favourite business.
          Every order updates inventory, revenue and AI insights automatically.

        </p>

      </section>

      {/* Categories */}

      <section className="mt-12">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">

            Categories

          </h2>

          <button className="text-[#C7F464]">

            View All

          </button>

        </div>

        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">

          {categories.map((category) => (

            <div
              key={category}
              className="cursor-pointer rounded-3xl border border-[#243652] bg-[#14233A] p-8 text-center transition hover:-translate-y-2 hover:border-[#C7F464]"
            >

              <p className="text-lg font-semibold">

                {category}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Featured Products */}

      <section className="mt-14">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">

            Featured Products

          </h2>

          <button className="text-[#C7F464]">

            View All

          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.name}
              className="rounded-3xl border border-[#243652] bg-[#14233A] overflow-hidden transition hover:-translate-y-2 hover:border-[#C7F464]"
            >

              {/* Image */}

              <div className="flex h-56 items-center justify-center bg-[#081120]">

                Product Image

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {product.name}

                </h3>

                <p className="mt-3 text-[#C7F464] text-xl">

                  {product.price}

                </p>

                <p className="mt-2 text-slate-400">

                  {product.stock}

                </p>

                <button className="mt-6 w-full rounded-2xl bg-[#C7F464] py-3 font-semibold text-black transition hover:scale-105">

                  Add To Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AI Recommendation */}

      <section className="mt-14 rounded-3xl border border-[#243652] bg-[#14233A] p-10">

        <h2 className="text-3xl font-bold">

          🤖 AI Recommendation

        </h2>

        <p className="mt-5 text-slate-300">

          Based on your previous purchases,
          you may also like a Laptop Sleeve and USB-C Hub.

        </p>

      </section>

    </CustomerLayout>
  );
}

export default Home;