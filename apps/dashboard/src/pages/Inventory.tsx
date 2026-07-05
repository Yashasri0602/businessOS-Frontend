import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";



function Inventory() {
  return (
    <DashboardLayout>

      <PageHeader
        title="Inventory"
        subtitle="Manage products, stock levels and inventory insights."
        buttonText="+ Add Product"
      />

    </DashboardLayout>
  );
}

export default Inventory;