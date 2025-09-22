// src/components/PageHeader.tsx
import { Link } from "react-router-dom";
import { Divider, Avatar } from "antd";
import { BarChartOutlined, UserOutlined } from "@ant-design/icons";

type Props = { title: string; subtitle?: string; className?: string };

export default function PageHeader({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`flex items-center justify-between gap-6 ${className}`}>
      {/* Left */}
      <div className="flex-2 min-w-0">
        <h1 className="text-title uppercase text-ink">{title}</h1>
        {subtitle ? (
          <p className="text-small text-gray-500 mt-1 truncate">{subtitle}</p>
        ) : null}
      </div>

      {/* Right (desktop only) */}
      <div className="hidden lg:flex flex-[2] justify-end">
        <div className="inline-flex items-center bg-primary text-white h-12 rounded-bl-2xl rounded-tl-2xl overflow-hidden">
          <Link
            to="/"
            className="relative inline-flex items-center gap-3 font-heading tracking-wide text-base sm:text-lg px-6 sm:px-8 h-full group overflow-hidden no-underline"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              <BarChartOutlined className="text-xl sm:text-2xl" />
              <span className="hidden sm:inline ps-4">Dashboard</span>
            </span>
          </Link>

          <Divider type="vertical" className="!border-white/60 !h-6" />

          <Link
            to="/profile"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 h-full group overflow-hidden no-underline"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 text-white">
              <Avatar
                size={36}
                icon={<UserOutlined className="text-primary" />}
                style={{ backgroundColor: "white" }}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
