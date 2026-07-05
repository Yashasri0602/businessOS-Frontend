import { Icons } from "../../../constants/icons";

function SearchBar(){

    const Search = Icons.search;

    return(

        <div className="relative w-full">

            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                placeholder="Search products..."
                className="w-full rounded-2xl border border-[#243652] bg-[#14233A] py-4 pl-12 pr-5 outline-none focus:border-[#C7F464]"
            />

        </div>

    );

}

export default SearchBar;