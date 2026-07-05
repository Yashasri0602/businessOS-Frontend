import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
}

function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",

    outline:
      "border border-violet-500 text-white hover:bg-violet-900/20",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;