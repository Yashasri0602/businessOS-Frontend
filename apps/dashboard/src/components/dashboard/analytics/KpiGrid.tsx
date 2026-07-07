import KpiCard from "../cards/KpiCard";

interface Props {
  kpis: {
    totalRevenue: number;
    totalProducts: number;
    totalOrders: number;
    totalCustomers: number;
    totalExpenses: number;
    lowStockProducts: number;
  };
}

function KpiGrid({ kpis }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard
        title="Revenue"
        value={`₹${kpis.totalRevenue.toLocaleString()}`}
        change="+0%"
      />

      <KpiCard
        title="Orders"
        value={kpis.totalOrders.toString()}
        change="+0%"
      />

      <KpiCard
        title="Customers"
        value={kpis.totalCustomers.toString()}
        change="+0%"
      />

      <KpiCard
        title="Low Stock"
        value={kpis.lowStockProducts.toString()}
        change="+0"
        positive={false}
      />
    </div>
  );
}

export default KpiGrid;