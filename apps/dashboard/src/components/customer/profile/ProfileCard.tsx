function ProfileCard() {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="flex items-center gap-6">

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C7F464] text-5xl text-black">

          👤

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">

            Shivaranjani

          </h2>

          <p className="mt-2 text-slate-400">

            shivaranjani@gmail.com

          </p>

          <p className="mt-1 text-slate-400">

            +91 9876543210

          </p>

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;