import ProductRow from "./ProductRow";

import type { Product } from "../../types/product";


interface Props {
  products: Product[];
  onDelete: () => void;
  onEdit: (product: Product) => void;
}

function ProductTable({ products, onDelete, onEdit }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#243652] bg-[#14233A]">
      <table className="w-full">
        <thead className="bg-[#081120]">
          <tr className="text-left text-slate-400">
            <th className="px-4 py-4">Image</th>
            <th className="px-4 py-4">Product</th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Stock</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Supplier</th>
            <th className="px-4 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="py-10 text-center text-slate-400"
              >
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductRow
                key={product._id}
                product={product}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;