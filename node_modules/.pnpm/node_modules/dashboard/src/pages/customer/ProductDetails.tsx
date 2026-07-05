import CustomerLayout from "../../layouts/CustomerLayout";

import ImageGallery from "../../components/customer/product-details/ImageGallery";
import ProductInfo from "../../components/customer/product-details/ProductInfo";
import QuantitySelector from "../../components/customer/product-details/QuantitySelector";
import ProductActions from "../../components/customer/product-details/ProductActions";
import ProductFeatures from "../../components/customer/product-details/ProductFeatures";
import ReviewSection from "../../components/customer/product-details/ReviewSection";
import RelatedProducts from "../../components/customer/product-details/RelatedProducts";

function ProductDetails() {

  return (

    <CustomerLayout>

      <div className="grid gap-12 lg:grid-cols-2">

        <ImageGallery />

        <div>

          <ProductInfo />

          <QuantitySelector />

          <ProductActions />

        </div>

      </div>

      <ProductFeatures />

      <ReviewSection />

      <RelatedProducts />

    </CustomerLayout>

  );

}

export default ProductDetails;