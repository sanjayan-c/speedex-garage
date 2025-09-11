// src/components/MobileNavbar.tsx
import { FaChartBar, FaUserCircle } from "react-icons/fa";

type Props = { onOpenMenu: () => void };

export default function MobileNavbar({ onOpenMenu }: Props) {
  return (
    // Show only on mobile & tablet
    <header className="sticky top-0 z-40 h-14 bg-black text-white flex items-center lg:hidden">
      {/* left group: hamburger + brand */}
      <div className="flex items-center gap-3 flex-1 px-4">
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"
          onClick={onOpenMenu}
          aria-label="Open menu"
        >
          <span className="sr-only">Open</span>
          <div className="space-y-1">
            <div className="h-[2px] w-5 bg-white" />
            <div className="h-[2px] w-5 bg-white" />
            <div className="h-[2px] w-5 bg-white" />
          </div>
        </button>

        <div className="font-heading text-xl tracking-wide">SPEEDEX</div>
      </div>

      {/* right actions */}
      <div className="flex items-center gap-6 bg-primary px-6 h-full rounded-bl-2xl">
        <FaChartBar className="text-white text-xl" />
        <span className="h-5 w-px bg-white/50" />
        <FaUserCircle className="text-white text-xl" />
      </div>
    </header>
  );
}
