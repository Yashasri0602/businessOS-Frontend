import { NavLink } from "react-router-dom";
import { Icons } from "../../constants/icons";

const menuItems = [
  { label: "Dashboard", path: "/", icon: Icons.dashboard },
  { label: "Inventory", path: "/inventory", icon: Icons.inventory },
  { label: "Orders", path: "/orders", icon: Icons.orders },
  { label: "Customers", path: "/customers", icon: Icons.customers },
  { label: "Employees", path: "/employees", icon: Icons.employees },
  { label: "Finance", path: "/finance", icon: Icons.finance },
  { label: "Reports", path: "/reports", icon: Icons.reports },
  { label: "Settings", path: "/settings", icon: Icons.settings },
];

function Sidebar() {
  return (
    <aside className="flex h-screen flex-col overflow-y-auto bg-[#081120] px-8 py-8">

      {/* Logo */}

      <div className="mb-10 flex items-center gap-4 shrink-0">

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

      {/* Menu */}

      <nav className="flex flex-col gap-3">

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

    </aside>
  );
}

export default Sidebar;