import { NavLink } from "react-router-dom";
import { Icons } from "../../constants/icons";

function Navbar() {

  const SearchIcon = Icons.search;
  const CartIcon = Icons.orders;
  const UserIcon = Icons.customers;

  return (
    <header className="sticky top-0 z-50 border-b border-[#243652] bg-[#081120]/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C7F464] text-2xl">
            🛍️
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              BusinessOS Connect
            </h1>

            <p className="text-sm text-slate-400">
              Shop Smart. Connected to AI.
            </p>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex items-center gap-8">

          <NavLink to="/customer/home" className="text-slate-300 hover:text-[#C7F464]">
            Home
          </NavLink>

          <NavLink to="/customer/products" className="text-slate-300 hover:text-[#C7F464]">
            Products
          </NavLink>

          <NavLink to="/customer/orders" className="text-slate-300 hover:text-[#C7F464]">
            Orders
          </NavLink>

          <NavLink to="/customer/complaints" className="text-slate-300 hover:text-[#C7F464]">
            Complaints
          </NavLink>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <div className="relative">

            <SearchIcon
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search products..."
              className="w-72 rounded-2xl border border-[#243652] bg-[#14233A] py-3 pl-11 pr-4 text-white outline-none focus:border-[#C7F464]"
            />

          </div>

          <button className="relative rounded-2xl border border-[#243652] bg-[#14233A] p-3">

            <CartIcon size={22} />

            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C7F464] text-xs font-bold text-black">
              2
            </span>

          </button>

          <button className="rounded-2xl border border-[#243652] bg-[#14233A] p-3">

            <UserIcon size={22} />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;