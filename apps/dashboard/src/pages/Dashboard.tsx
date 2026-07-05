import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import KpiGrid from "../components/dashboard/analytics/KpiGrid";
import RevenueChart from "../components/dashboard/charts/RevenueChart";

import InventoryStatus from "../components/dashboard/widgets/InventoryStatus";
import RecentOrders from "../components/dashboard/widgets/RecentOrders";
import AIInsights from "../components/dashboard/widgets/AiInsights";
import Notifications from "../components/dashboard/widgets/Notifications";
import QuickActions from "../components/dashboard/widgets/QuickActions";

function Dashboard() {
  return (
    <DashboardLayout>

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back. Here's what's happening in your business."
      />

      <KpiGrid />

      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <InventoryStatus />

      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentOrders />
        </div>

        <AIInsights />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Notifications />

        <QuickActions />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;