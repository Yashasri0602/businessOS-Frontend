interface Props {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

function KpiCard({
  title,
  value,
  change,
  positive = true,
}: Props) {

  return (

    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C7F464] hover:shadow-xl">

      <p className="text-lg text-slate-400">

        {title}

      </p>

      <h2 className="mt-5 text-5xl font-extrabold text-white">

        {value}

      </h2>

      <p
        className={`mt-5 text-lg font-semibold ${
          positive
            ? "text-[#C7F464]"
            : "text-red-400"
        }`}
      >

        {change}

      </p>

    </div>

  );

}

export default KpiCard;