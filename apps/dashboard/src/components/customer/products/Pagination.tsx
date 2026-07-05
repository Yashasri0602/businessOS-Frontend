function Pagination() {
  return (
    <div className="mt-12 flex justify-center gap-4">

      {[1, 2, 3, 4].map((page) => (

        <button
          key={page}
          className={`h-12 w-12 rounded-xl transition ${
            page === 1
              ? "bg-[#C7F464] text-black"
              : "bg-[#14233A] hover:bg-[#6C2BFF]"
          }`}
        >
          {page}
        </button>

      ))}

    </div>
  );
}

export default Pagination;