import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import KpiGrid from "../components/dashboard/analytics/KpiGrid";
import RevenueChart from "../components/dashboard/charts/RevenueChart";
import RecentActivity from "../components/dashboard/widgets/RecentActivity";
import InventoryStatus from "../components/dashboard/widgets/InventoryStatus";
import RecentOrders from "../components/dashboard/widgets/RecentOrders";
import AIInsights from "../components/dashboard/widgets/AiInsights";
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
        <div className="text-xl text-white">
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  if (!dashboard) {
    return (
      <DashboardLayout>
        <div className="text-xl text-red-400">
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

      <div className="mt-8 mb-8 grid gap-6 xl:grid-cols-3">

        {/* Left Column */}

        <div className="space-y-6 xl:col-span-2">

          <RevenueChart
            revenue={dashboard.kpis.totalRevenue}
            orders={dashboard.kpis.totalOrders}
            customers={dashboard.kpis.totalCustomers}
            expenses={dashboard.kpis.totalExpenses}
          />

          <RecentOrders
            orders={dashboard.recentOrders}
          />

            <RecentActivity
              revenue={dashboard.kpis.totalRevenue}
              orders={dashboard.kpis.totalOrders}
              customers={dashboard.kpis.totalCustomers}
              products={dashboard.kpis.totalProducts}
            />

        </div>

        {/* Right Sidebar */}

        <div className="self-start space-y-6 xl:sticky xl:top-6">

          <InventoryStatus
            inventory={dashboard.inventoryStatus}
          />

          <AIInsights />


        </div>

      </div>

      <QuickActions />

    </DashboardLayout>
  );
}

export default Dashboard;