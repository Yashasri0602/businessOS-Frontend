interface PageHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
}

function PageHeader({
  title,
  subtitle,
  buttonText,
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

        <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">

          {buttonText}

        </button>

      )}

    </div>
  );
}

export default PageHeader;