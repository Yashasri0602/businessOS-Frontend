import type { ReactNode } from "react";
import Sidebar from "../components/common/Sidebar";
import Topbar from "../components/common/Topbar";

interface Props {
  children: ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="bg-[#081120] min-h-screen">

      {/* Sidebar */}

      <aside className="fixed inset-y-0 left-0 w-80 border-r border-[#243652] bg-[#081120] z-40">
        <Sidebar />
      </aside>

      {/* Main */}

      <div className="ml-80">

        {/* Topbar */}

        <header className="fixed left-80 right-0 top-0 z-30">
          <Topbar />
        </header>

        {/* Page */}

        <main className="pt-24 px-10 pb-10">

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;