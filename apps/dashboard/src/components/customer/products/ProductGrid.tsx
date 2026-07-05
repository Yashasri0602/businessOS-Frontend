import ProductCard from "./ProductCard";

const products = [
  {
    name: "Wireless Headphones",
    price: "₹2,499",
    category: "Electronics",
  },
  {
    name: "Gaming Mouse",
    price: "₹1,299",
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: "₹3,499",
    category: "Fashion",
  },
  {
    name: "Coffee Mug",
    price: "₹399",
    category: "Home",
  },
  {
    name: "Notebook Pack",
    price: "₹250",
    category: "Stationery",
  },
  {
    name: "Vitamin Tablets",
    price: "₹699",
    category: "Medical",
  },
  {
    name: "Rice 10kg",
    price: "₹899",
    category: "Grocery",
  },
  {
    name: "Smart Watch",
    price: "₹4,999",
    category: "Electronics",
  },
];

function ProductGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (

        <ProductCard
          key={product.name}
          {...product}
        />

      ))}

    </div>
  );
}

export default ProductGrid;