import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
      {icon && <div className="mb-5 text-violet-400">{icon}</div>}

      <h3 className="text-2xl font-semibold text-violet-400">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        {description}
      </p>
    </div>
  );
}

export default Card;