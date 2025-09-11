import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, ...props }: Props) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className="w-full rounded-md border border-gray-300 px-3 py-2
                   focus:border-primary focus:ring-primary outline-none"
        {...props}
      />
    </div>
  );
}
