import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import AddProductModal from "../components/inventory/AddProductModal";
import type { Product } from "../types/product";
import InventoryStats from "../components/inventory/InventoryStats";
import InventoryFilters from "../components/inventory/InventoryFilters";
import ProductTable from "../components/inventory/ProductTable";

import { getProducts } from "../services/inventory.service";

function Inventory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <PageHeader
        title="Inventory"
        subtitle="Manage products, stock levels and inventory insights."
        buttonText="+ Add Product"
        onButtonClick={() => {
          setSelectedProduct(undefined);
          setShowAddModal(true);
        }}
      />

      {loading ? (
        <div className="mt-10 text-white text-xl">
          Loading products...
        </div>
      ) : (
        <>
          <InventoryStats products={products} />

          <div className="mt-8">
            <InventoryFilters search={search} setSearch={setSearch}/>
          </div>

          <div className="mt-8">
            <ProductTable
                products={filteredProducts.filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )}
                onDelete={fetchProducts}
                onEdit={(product) => {
                  setSelectedProduct(product);
                  setShowAddModal(true);
                }}
            />
          </div>
        </>
      )}
      {showAddModal && (
        <AddProductModal
          product={selectedProduct}
          onClose={() => {
            setShowAddModal(false);
            setSelectedProduct(undefined);
          }}
          onSuccess={fetchProducts}
        />
      )}
    </DashboardLayout>
  );
}

export default Inventory;