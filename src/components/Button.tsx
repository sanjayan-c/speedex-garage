import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = "", children, ...props }: Props) {
  const base =
    "relative w-full rounded-md px-4 py-2 font-medium shadow " +
    "bg-primary text-white overflow-hidden " + // ensure ::before stays inside
    "focus:outline-none focus:ring-2 focus:ring-primary " +
    "transition-colors duration-200 group";

  return (
    <button
      className={className ? `${base} ${className}` : base}
      {...props}
    >
      {/* hover effect layer */}
      <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

      {/* content always above overlay */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
