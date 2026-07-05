const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Grocery",
  "Medical",
  "Home",
  "Stationery",
];

function CategoryChips() {
  return (

    <div className="flex flex-wrap gap-4">

      {categories.map((category)=>(

        <button
          key={category}
          className="rounded-full border border-[#243652] bg-[#14233A] px-6 py-3 text-white transition hover:border-[#C7F464] hover:bg-[#C7F464] hover:text-black"
        >
          {category}
        </button>

      ))}

    </div>

  );
}

export default CategoryChips;