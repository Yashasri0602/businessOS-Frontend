import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import KpiGrid from "../components/dashboard/analytics/KpiGrid";
import RevenueChart from "../components/dashboard/charts/RevenueChart";

import InventoryStatus from "../components/dashboard/widgets/InventoryStatus";
import RecentOrders from "../components/dashboard/widgets/RecentOrders";
import AIInsights from "../components/dashboard/widgets/AiInsights";
import Notifications from "../components/dashboard/widgets/Notifications";
import QuickActions from "../components/dashboard/widgets/QuickActions";

import { getDashboard } from "../services/dashboard.service";
import type { DashboardData } from "../services/dashboard.service";

function Dashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-white text-xl">
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  if (!dashboard) {
    return (
      <DashboardLayout>
        <div className="text-red-400 text-xl">
          Failed to load dashboard.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back. Here's what's happening in your business."
      />

      <KpiGrid kpis={dashboard.kpis} />

      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <InventoryStatus
          inventory={dashboard.inventoryStatus}
        />

      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentOrders
            orders={dashboard.recentOrders}
          />
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