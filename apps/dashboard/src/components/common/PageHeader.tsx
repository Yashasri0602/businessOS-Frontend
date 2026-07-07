interface PageHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-zinc-400">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="rounded-xl bg-[#C7F464] px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default PageHeader;