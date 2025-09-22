// src/components/Button.tsx
import { Button as AntButton, type ButtonProps } from "antd";
import React from "react";

type Props = ButtonProps & { className?: string; children?: React.ReactNode };

export default function Button({ className = "", children, ...props }: Props) {
  // AntD handles focus ring + primary color via ConfigProvider tokens
  return (
    <AntButton
      type="primary"
      {...props}
      className={[
        "relative group w-full !rounded-md !px-4 !py-2 !font-medium !shadow",
        "!bg-primary hover:!bg-primary/90 !text-white overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* hover effect layer */}
      <span className="pointer-events-none absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      {/* content */}
      <span className="relative z-10">{children}</span>
    </AntButton>
  );
}
