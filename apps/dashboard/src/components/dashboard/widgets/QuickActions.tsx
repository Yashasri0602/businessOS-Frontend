import { useNavigate } from "react-router-dom";
import {
  Package,
  ShoppingCart,
  Users,
  FileBarChart,
} from "lucide-react";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Product",
      subtitle: "Inventory",
      icon: <Package size={42} />,
      path: "/inventory",
    },
    {
      title: "New Order",
      subtitle: "Sales",
      icon: <ShoppingCart size={42} />,
      path: "/orders",
    },
    {
      title: "Customers",
      subtitle: "CRM",
      icon: <Users size={42} />,
      path: "/customers",
    },
    {
      title: "Reports",
      subtitle: "Analytics",
      icon: <FileBarChart size={42} />,
      path: "/reports",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
        <span>⚡</span>
        Quick Actions
      </h2>

      <div className="grid auto-rows-[170px] grid-cols-2 gap-4">

        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="group flex flex-col items-center justify-center rounded-2xl border border-[#243652] bg-[#1A2A42] transition-all duration-200 hover:-translate-y-1 hover:border-[#C7F464] hover:bg-[#223553]"
          >
            <div className="mb-4 text-[#C7F464] transition-transform duration-200 group-hover:scale-110">
              {action.icon}
            </div>

            <p className="text-lg font-semibold text-white">
              {action.title}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {action.subtitle}
            </p>
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;