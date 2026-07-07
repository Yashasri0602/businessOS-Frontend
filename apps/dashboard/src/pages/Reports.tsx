import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import ReportStats from "../components/reports/ReportStats";
import SalesReport from "../components/reports/SalesReport";
import InventoryReport from "../components/reports/InventoryReport";
import CustomerReport from "../components/reports/CustomerReport";
import ExpenseReport from "../components/reports/ExpenseReport";
import EmployeeReport from "../components/reports/EmployeeReport";

import { getReports } from "../services/insights.service";

function Reports() {
  const [report, setReport] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
    try {
      const data = await getReports();

      setReport(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <DashboardLayout>

      <PageHeader
        title="Reports"
        subtitle="Business analytics and performance reports."
      />

      {loading ? (
        <div className="mt-10 text-xl text-white">
          Loading reports...
        </div>
      ) : (
        <>

          <ReportStats report={report} />

          <div className="mt-8">
            <SalesReport report={report} />
          </div>

          <div className="mt-8">
            <InventoryReport report={report} />
          </div>

          <div className="mt-8">
            <CustomerReport report={report} />
          </div>

          <div className="mt-8">
            <ExpenseReport report={report} />
          </div>

          <div className="mt-8">
            <EmployeeReport report={report} />
          </div>

        </>
      )}

    </DashboardLayout>
  );
}

export default Reports;