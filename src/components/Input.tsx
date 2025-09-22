// src/components/Input.tsx
import { Input as AntInput, type InputProps } from "antd";

type Props = InputProps & { label?: string };

export default function Input({ label, className, ...props }: Props) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <AntInput
        {...props}
        className={[
          "!w-full !rounded-md",
          "!border !border-gray-300 focus:!border-primary focus:!ring-0.5 focus:!ring-primary",
          className || "",
        ].join(" ")}
      />
    </div>
  );
}
