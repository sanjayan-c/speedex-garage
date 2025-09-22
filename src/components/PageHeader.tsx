import { FaChartBar, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PageHeader({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`flex items-center justify-between gap-6 ${className}`}>
      {/* Left: title */}
      <div className="flex-2 min-w-0">
        <h1 className="text-title uppercase tracking-wide">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-gray-500 mt-1 truncate">{subtitle}</p>
        ) : null}
      </div>

      {/* Right: fixed actions (laptops/desktops only) */}
      <div className="hidden lg:flex flex-[2] justify-end">
        <div className="inline-flex items-center bg-primary text-white h-12 rounded-bl-2xl rounded-tl-2xl overflow-hidden">
          {/* Dashboard link */}
          <Link
            to="/"
            className="relative inline-flex items-center gap-3 font-heading tracking-wide text-base sm:text-lg px-6 sm:px-8 h-full group overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              <FaChartBar className="text-white text-xl sm:text-2xl" />
              <span className="hidden sm:inline text-white ps-4">Dashboard</span>
            </span>
          </Link>

          {/* Divider */}
          <span className="h-6 w-px bg-white/60" />

          {/* Profile link */}
          <Link
            to="/profile"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 h-full group overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">
              <FaUserCircle className="text-white text-2xl sm:text-3xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
