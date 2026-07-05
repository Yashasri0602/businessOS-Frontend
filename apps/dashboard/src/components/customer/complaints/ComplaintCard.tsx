interface Props {
  title: string;
  status: string;
  date: string;
}

function ComplaintCard({
  title,
  status,
  date,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">

            {title}

          </h2>

          <p className="mt-2 text-slate-400">

            {date}

          </p>

        </div>

        <span className="rounded-full bg-[#C7F464] px-4 py-2 font-semibold text-black">

          {status}

        </span>

      </div>

    </div>
  );
}

export default ComplaintCard;