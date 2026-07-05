import { Icons } from "../../constants/icons";

function Topbar() {

  const SearchIcon = Icons.search;
  const BellIcon = Icons.notification;
  const AiIcon = Icons.ai;

  return (

    <header className="flex h-20 items-center justify-between border-b border-[#243652] bg-[#081120] px-8 backdrop-blur-md">

      {/* Search */}

      <div className="relative w-120">

        <SearchIcon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search products, customers, orders..."
          className="w-full rounded-2xl border border-[#243652] bg-[#14233A] py-3 pl-12 pr-4 text-white outline-none transition focus:border-[#C7F464]"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="relative rounded-2xl border border-[#243652] bg-[#14233A] p-3 transition hover:border-[#C7F464]">

          <BellIcon size={20} className="text-white"/>

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C7F464] text-xs font-bold text-black">

            3

          </span>

        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-[#C7F464] px-5 py-3 font-semibold text-black transition hover:scale-105">

          <AiIcon size={18}/>

          <span>AI Assistant</span>

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14233A] border border-[#243652] font-bold text-[#C7F464]">

            A

          </div>

          <div>

            <p className="font-semibold text-white">

              Admin

            </p>

            <p className="text-sm text-slate-400">

              Business Owner

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;