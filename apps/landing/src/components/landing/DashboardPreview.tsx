function DashboardPreview() {
  return (
    <section className="bg-[#0A1425] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#14233A] px-5 py-2 text-sm text-[#C7F464]">
            BUSINESS OWNER DASHBOARD
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">

            Manage Your Entire Business

            <span className="block text-[#C7F464]">

              From One Intelligent Dashboard

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            Revenue, inventory, employees, AI insights,
            customer activity and reports—
            everything updates automatically.

          </p>

        </div>

        {/* Dashboard Mockup */}

        <div className="mt-20 rounded-[36px] border border-[#243652] bg-[#14233A] p-8">

          <div className="grid gap-6 lg:grid-cols-4">

            <div className="rounded-2xl bg-[#1A2942] p-6">

              <p className="text-slate-400">
                Revenue
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">

                ₹2.4L

              </h3>

            </div>

            <div className="rounded-2xl bg-[#1A2942] p-6">

              <p className="text-slate-400">
                Orders
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">

                428

              </h3>

            </div>

            <div className="rounded-2xl bg-[#1A2942] p-6">

              <p className="text-slate-400">
                Customers
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">

                1,248

              </h3>

            </div>

            <div className="rounded-2xl bg-[#1A2942] p-6">

              <p className="text-slate-400">
                AI Alerts
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#C7F464]">

                4

              </h3>

            </div>

          </div>

          <div className="mt-8 rounded-3xl border border-dashed border-[#3A537A] py-32 text-center">

            <div className="text-7xl">

              🖥️

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">

              Dashboard Screenshot Placeholder

            </h3>

            <p className="mt-4 text-slate-400">

              Replace this with your Business Owner Dashboard image.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;