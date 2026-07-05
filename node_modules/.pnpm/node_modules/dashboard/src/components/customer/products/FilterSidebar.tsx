function FilterSidebar(){

    return(

        <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-6">

            <h2 className="mb-6 text-xl font-bold">
                Filters
            </h2>

            <div className="space-y-4">

                <button className="w-full rounded-xl bg-[#1B2C47] py-3">
                    Electronics
                </button>

                <button className="w-full rounded-xl bg-[#1B2C47] py-3">
                    Fashion
                </button>

                <button className="w-full rounded-xl bg-[#1B2C47] py-3">
                    Grocery
                </button>

                <button className="w-full rounded-xl bg-[#1B2C47] py-3">
                    Medical
                </button>

            </div>

        </div>

    );

}

export default FilterSidebar;