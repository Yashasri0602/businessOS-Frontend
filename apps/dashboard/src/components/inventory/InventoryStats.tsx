import type { Product } from "../../types/product";

interface Props {
  products: Product[];
}

function InventoryStats({ products }: Props) {
  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) =>
      product.stock > 0 &&
      product.stock <= product.lowStockAlert
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const inventoryValue = products.reduce(
    (sum, product) =>
      sum + product.price * product.stock,
    0
  );
  const cards = [
    {
      title: "Products",
      value: totalProducts,
    },
    {
      title: "Inventory Value",
      value: `₹${inventoryValue.toLocaleString()}`,
    },
    {
      title: "Low Stock",
      value: lowStock,
    },
    {
      title: "Out of Stock",
      value: outOfStock,
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-6"
        >
          <p className="text-slate-400">{card.title}</p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default InventoryStats;