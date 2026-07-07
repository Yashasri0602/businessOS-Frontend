import type { Product } from "../../types/product";
import { deleteProduct } from "../../services/inventory.service";

interface Props {
  product: Product;
  onDelete: () => void;
  onEdit: (product: Product) => void;
}

function ProductRow({ product, onDelete, onEdit }: Props) {
  const getStatus = () => {
      if (product.stock === 0) {
        return {
          text: "Out of Stock",
          className: "bg-red-500 text-white",
        };
      }

      if (product.stock <= product.lowStockAlert) {
        return {
          text: "Low Stock",
          className: "bg-yellow-500 text-black",
        };
      }

      return {
        text: "In Stock",
        className: "bg-green-500 text-white",
      };
    };

    const status = getStatus();
  return (
    <tr className="border-b border-[#243652] hover:bg-[#1A2B45] transition">
      <td className="py-4 px-4">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-12 w-12 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#243652]">
            📦
          </div>
        )}
      </td>

      <td className="px-4 text-white font-medium">
        {product.name}
      </td>

      <td className="px-4 text-slate-300">
        {product.category}
      </td>

      <td className="px-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            product.stock <= 5
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {product.stock}
        </span>
      </td>
      <td className="px-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${status.className}`}
        >
          {status.text}
        </span>
      </td>

      <td className="px-4 text-white">
        ₹{product.price.toLocaleString()}
      </td>

      <td className="px-4 text-slate-300">
        {product.supplier || "-"}
      </td>

      <td className="px-4">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={async () => {
              const confirmDelete = window.confirm(
                `Delete "${product.name}"?`
              );

              if (!confirmDelete) return;

              try {
                await deleteProduct(product._id!);
                onDelete();
              } catch (err) {
                console.error(err);
                alert("Failed to delete product");
              }
            }}
            className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;