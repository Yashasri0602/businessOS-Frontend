import type { ReactNode } from "react";

import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";

interface CustomerLayoutProps {
  children: ReactNode;
}

export default function CustomerLayout({
  children,
}: CustomerLayoutProps) {
  return (
    <div className="min-h-screen bg-[#081120] text-white">

      <Navbar />

      <main className="mx-auto min-h-screen max-w-7xl px-8 py-8">

        {children}

      </main>

      <Footer />

    </div>
  );
}