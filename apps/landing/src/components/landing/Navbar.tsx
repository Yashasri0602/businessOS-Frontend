function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#243652] bg-[#081120]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C7F464] text-xl shadow-lg">
            🚀
          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              BusinessOS AI
            </h1>

            <p className="text-sm text-[#B8C2D3]">
              AI Powered Business Platform
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden items-center gap-10 text-sm font-medium lg:flex">

          <button className="text-[#B8C2D3] transition hover:text-[#C7F464]">
            <a href="#features">
               Features
            </a>
          </button>

          <button className="text-[#B8C2D3] transition hover:text-[#C7F464]">
            <a href="#solutions">
              Solutions
            </a>
          </button>

          <button className="text-[#B8C2D3] transition hover:text-[#C7F464]">
            <a href="#faq">
                FAQ
            </a>
          </button>

          <button className="text-[#B8C2D3] transition hover:text-[#C7F464]">
           <a href="#contact">
              Get Started
            </a>
          </button>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="hidden rounded-xl border border-[#D4AF37] px-5 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#081120] lg:block">
            Login
          </button>

          <button className="rounded-xl bg-[#C7F464] px-6 py-3 font-semibold text-[#081120] shadow-lg transition hover:scale-105 hover:bg-[#D8FF6A]">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;