function Footer() {
  return (
    <footer className="border-t border-[#243652] bg-[#081120]">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-8 py-16 lg:flex-row">

        <div>

          <h2 className="text-3xl font-bold text-white">
            BusinessOS AI
          </h2>

          <p className="mt-4 max-w-md leading-8 text-slate-400">

            The AI Operating System for Modern Businesses.

            Inventory, Customers, Employees, Finance,
            Reports and AI—all connected in one place.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-16">

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Dashboard</li>
              <li>Inventory</li>
              <li>Analytics</li>
              <li>Customers</li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Support</li>

            </ul>

          </div>

        </div>

      </div>

      <div className="border-t border-[#243652] py-6 text-center text-slate-500">

        © 2026 BusinessOS AI • Built for Hackathon 🚀

      </div>

    </footer>
  );
}

export default Footer;