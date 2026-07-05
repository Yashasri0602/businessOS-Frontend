interface StatsCardProps {
  title: string;
  value: string;
}

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
      <p className="text-sm text-gray-400">{title}</p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;