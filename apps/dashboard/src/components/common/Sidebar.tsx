import { NavLink} from "react-router-dom";
import { Icons } from "../../constants/icons";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    label: "Inventory",
    path: "/inventory",
    icon: Icons.inventory,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: Icons.orders,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: Icons.customers,
  },
  {
    label: "Employees",
    path: "/employees",
    icon: Icons.employees,
  },
  {
    label: "Finance",
    path: "/finance",
    icon: Icons.finance,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: Icons.reports,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: Icons.customers,
  }
];

function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");

    // Redirect to Landing Page
    window.location.href = "http://localhost:5173";
  };

  return (
    <aside className="flex h-screen flex-col bg-[#081120] px-8 py-8">

      {/* Logo */}

      <div className="mb-10 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C7F464] text-3xl">
          🚀
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            BusinessOS AI
          </h1>

          <p className="text-base text-slate-400">
            AI Powered Business Platform
          </p>
        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-3 overflow-y-auto">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-3 text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#C7F464] text-black"
                    : "text-slate-300 hover:bg-[#14233A] hover:text-white"
                }`
              }
            >
              <Icon size={22} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-red-500 px-5 py-3 text-lg font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default Sidebar;