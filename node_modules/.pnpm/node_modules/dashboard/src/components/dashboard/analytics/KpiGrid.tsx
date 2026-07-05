import KpiCard from "../cards/KpiCard";

function KpiGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Revenue"
        value="₹2.4L"
        change="+18%"
      />

      <KpiCard
        title="Orders"
        value="428"
        change="+9%"
      />

      <KpiCard
        title="Customers"
        value="1,248"
        change="+12%"
      />

      <KpiCard
        title="Low Stock"
        value="14"
        change="-2"
      />

    </div>
  );
}

export default KpiGrid;