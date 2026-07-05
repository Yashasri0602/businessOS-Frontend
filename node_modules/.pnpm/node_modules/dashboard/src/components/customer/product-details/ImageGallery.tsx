function ImageGallery() {
  return (
    <div>

      <div className="flex h-125 items-center justify-center rounded-3xl border border-[#243652] bg-[#14233A] text-9xl">
        📦
      </div>

      <div className="mt-6 flex gap-4">

        {[1,2,3,4].map((item)=>(

          <div
            key={item}
            className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-2xl border border-[#243652] bg-[#1B2C47] text-3xl transition hover:border-[#C7F464]"
          >
            📦
          </div>

        ))}

      </div>

    </div>
  );
}

export default ImageGallery;