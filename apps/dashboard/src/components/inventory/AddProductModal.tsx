import { useState } from "react";
import type { Product } from "../../types/product";
import { createProduct, updateProduct } from "../../services/inventory.service";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  product?: Product;
}

function AddProductModal({ onClose, onSuccess, product }: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Product>(
  product ?? {
    name: "",
    category: "",
    description: "",
    price: undefined as any,
    costPrice: undefined as any,
    stock: undefined as any,
    lowStockAlert: undefined as any,
    barcode: "",
    supplier: "",
    image: "",
  }
);

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]:
        type === "number"
          ? value === ""
            ? undefined
            : Number(value)
          : value,
    });
  };

  const handleSubmit = async () => {
    try {
        setLoading(true);

        if (product?._id) {
        await updateProduct(product._id, form);
        } else {
        await createProduct(form);
        }

        await onSuccess();

        onClose();
    } catch (err) {
        console.error(err);
        alert(
        product
            ? "Failed to update product"
            : "Failed to create product"
        );
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-3xl rounded-3xl bg-[#14233A] p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            name="name"
            value={form.name}
            placeholder="Product Name"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="category"
            value={form.category}
            placeholder="Category"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="price"
            type="number"
            value={form.price ?? ""}
            placeholder="Selling Price (₹)"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="costPrice"
            type="number"
            value={form.costPrice ?? ""}
            placeholder="Cost Price (₹)"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="stock"
            type="number"
            value={form.stock ?? ""}
            placeholder="Current Stock"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

         <input
            name="lowStockAlert"
            type="number"
            value={form.lowStockAlert ?? ""}
            placeholder="Low Stock Alert"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="supplier"
            value={form.supplier}
            placeholder="Supplier"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="barcode"
            value={form.barcode}
            placeholder="Barcode"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

          <input
            name="image"
            value={form.image}
            placeholder="Image URL"
            onChange={handleChange}
            className="rounded-xl bg-[#081120] p-3 text-white"
          />

        </div>

        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          className="mt-5 h-28 w-full rounded-xl bg-[#081120] p-3 text-white"
        />

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-[#C7F464] px-5 py-3 font-semibold text-black"
          >
            {loading
                ? "Saving..."
                : product
                ? "Update Product"
                : "Save Product"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddProductModal;