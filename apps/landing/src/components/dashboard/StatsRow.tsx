import StatsCard from "../../ui/StatsCard";
import { dashboardStats } from "../../mock/dashboard";

function StatsRow() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
}

export default StatsRow;