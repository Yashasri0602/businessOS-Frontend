import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import FinanceStats from "../components/finance/FinanceStats";
import ExpenseFilters from "../components/finance/ExpenseFilters";
import ExpenseTable from "../components/finance/ExpenseTable";
import AddExpenseModal from "../components/finance/AddExpenseModal";

import type { Expense } from "../types/expense";

import { getExpenses } from "../services/expense.service";
import { getReports } from "../services/insights.service";

function Finance() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [report, setReport] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedExpense, setSelectedExpense] =
    useState<Expense>();

  const fetchData = async () => {
    try {
      const [expenseData, reportData] =
        await Promise.all([
          getExpenses(),
          getReports(),
        ]);

      setExpenses(expenseData);
      setReport(reportData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredExpenses = expenses.filter((expense) =>
    expense.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <PageHeader
        title="Finance"
        subtitle="Track revenue, expenses and business profitability."
        buttonText="+ Add Expense"
        onButtonClick={() => {
          setSelectedExpense(undefined);
          setShowModal(true);
        }}
      />

      {loading ? (
        <div className="mt-10 text-xl text-white">
          Loading...
        </div>
      ) : (
        <>

          <FinanceStats report={report} />

          <div className="mt-8">
            <ExpenseFilters
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="mt-8">
            <ExpenseTable
              expenses={filteredExpenses}
              onDelete={fetchData}
              onEdit={(expense) => {
                setSelectedExpense(expense);
                setShowModal(true);
              }}
            />
          </div>

        </>
      )}

      {showModal && (
        <AddExpenseModal
          expense={selectedExpense}
          onClose={() => {
            setShowModal(false);
            setSelectedExpense(undefined);
          }}
          onSuccess={fetchData}
        />
      )}

    </DashboardLayout>
  );
}

export default Finance;