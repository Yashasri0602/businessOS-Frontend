import CustomerLayout from "../../layouts/CustomerLayout";

import HeroBanner from "../../components/customer/products/HeroBanner";
import CategoryChips from "../../components/customer/products/CategoryChips";
import SearchBar from "../../components/customer/products/SearchBar";
import FilterSidebar from "../../components/customer/products/FilterSidebar";
import SortDropdown from "../../components/customer/products/SortDropdown";
import ProductGrid from "../../components/customer/products/ProductGrid";
import Pagination from "../../components/customer/products/Pagination";

function Products() {
  return (
    <CustomerLayout>

      <HeroBanner />

      <div className="mt-10">

        <CategoryChips />

      </div>

      <div className="mt-8 flex items-center justify-between gap-6">

        <div className="flex-1">

          <SearchBar />

        </div>

        <SortDropdown />

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-4">

        <div>

          <FilterSidebar />

        </div>

        <div className="lg:col-span-3">

          <ProductGrid />

        </div>

      </div>

      <Pagination />

    </CustomerLayout>
  );
}

export default Products;