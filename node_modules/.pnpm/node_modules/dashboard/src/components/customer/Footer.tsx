function Footer() {
  return (
    <footer className="mt-20 border-t border-[#243652] bg-[#081120]">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-8 py-14 md:flex-row md:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            BusinessOS Connect
          </h2>

          <p className="mt-4 max-w-md text-slate-400">
            Every purchase you make is securely processed and instantly
            connected with the business's AI-powered operating system.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-white">
            Quick Links
          </h3>

          <div className="mt-4 space-y-2 text-slate-400">

            <p>Home</p>
            <p>Products</p>
            <p>Orders</p>
            <p>Complaints</p>

          </div>

        </div>

        <div>

          <h3 className="font-semibold text-white">
            Contact
          </h3>

          <div className="mt-4 space-y-2 text-slate-400">

            <p>support@businessos.ai</p>
            <p>+91 98765 43210</p>
            <p>24×7 Customer Support</p>

          </div>

        </div>

      </div>

      <div className="border-t border-[#243652] py-6 text-center text-sm text-slate-500">

        © 2026 BusinessOS AI. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;