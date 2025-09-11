import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaCarCrash,
  FaTruckPickup,
  FaCarSide,
  FaFileInvoice,
  FaFileSignature,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { ChevronDown } from "./icons";
import sidebarBg from "../assets/images/Login.png";

type Item = { label: string; icon?: keyof typeof ICONS; href?: string };
type Group = {
  label: string;
  icon: keyof typeof ICONS;
  items?: Item[];
  href?: string;
};

// Map labels → icons (Font Awesome via react-icons)
const ICONS = {
  home: FaHome,
  tools: FaTools,
  carCrash: FaCarCrash,
  truck: FaTruckPickup,
  car: FaCarSide,
  invoice: FaFileInvoice,
  quote: FaFileSignature,
  employee: FaUserTie,
  customer: FaUsers,
};

const MENU: Group[] = [
  {
    label: "Rim Work",
    icon: "tools",
    items: [
      { label: "Dashboard", icon: "home", href: "/" },
      { label: "Rim Work Service", icon: "tools", href: "/rim/services" },
      { label: "Add New Rim Work", icon: "tools", href: "/rim/new" },
      { label: "Custom Message", icon: "tools", href: "/rim/message" },
    ],
  },
  {
    label: "Mechanical Repairs",
    icon: "tools",
    items: [
      {
        label: "Dashboard",
        icon: "home",
        href: "/mechanical-repairs/dashboard",
      },
      {
        label: "Mechanical Service",
        icon: "tools",
        href: "/mechanical-repairs/services",
      },
      {
        label: "Mechanical Repairs Form",
        icon: "tools",
        href: "/mechanical-repairs/new",
      },
      {
        label: "Custom Message",
        icon: "tools",
        href: "/mechanical-repairs/message",
      },
    ],
  },
  {
    label: "Body Shop",
    icon: "carCrash",
    items: [
      { label: "Dashboard", icon: "home", href: "/body-shop/dashboard" },
      {
        label: "Body Shop Service",
        icon: "tools",
        href: "/body-shop/services",
      },
      { label: "Add New Body Work", icon: "tools", href: "/body-shop/new" },
      { label: "Custom Message", icon: "tools", href: "/body-shop/message" },
    ],
  },
  {
    label: "Towing Service",
    icon: "truck",
    items: [
      { label: "Dashboard", icon: "home", href: "/towing/dashboard" },
      { label: "Towing Service", icon: "tools", href: "/towing/services" },
      { label: "Add New Towing", icon: "tools", href: "/towing/new" },
    ],
  },
  {
    label: "Rental Car",
    icon: "car",
    items: [{ label: "Dashboard", icon: "home", href: "/rental/dashboard" }],
  },
  { label: "Invoice", icon: "invoice", href: "/invoice" },
  { label: "Get a Quote", icon: "quote", href: "/quote" },
  { label: "Employee", icon: "employee", href: "/employee" },
  { label: "Customer", icon: "customer", href: "/customer" },
];

type Props = {
  activePath?: string; // optional; still used to auto-expand groups on first render
  open?: boolean; // mobile drawer
  onClose?: () => void; // close mobile drawer
};

export default function Sidebar({
  activePath = "/",
  open = false,
  onClose,
}: Props) {
  // expand groups by default if route matches
  const defaultOpen = useMemo(() => {
    const map = new Map<string, boolean>();
    MENU.forEach((g) => {
      const isParent = g.href && g.href === activePath;
      const hasActiveChild = g.items?.some((i) => i.href === activePath);
      map.set(g.label, Boolean(isParent || hasActiveChild));
    });
    return map;
  }, [activePath]);

  const [expanded, setExpanded] = useState<Map<string, boolean>>(defaultOpen);
  const toggle = (label: string) =>
    setExpanded((prev) => new Map(prev).set(label, !prev.get(label)));

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden ${open ? "block" : "hidden"}`}
        onClick={onClose}
      />

      <aside
        className={[
          "fixed lg:static top-0 left-0 z-50 lg:z-auto",
          "w-72 shrink-0 h-screen",
          "bg-black text-white",
          "transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "shadow-2xl md:shadow-none",
          "overflow-y-auto flex flex-col",
        ].join(" ")}
      >
        {/* Header with bg image + gradient + mobile close */}
        <div
          className="relative h-40 p-6 flex items-end"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0.4), rgba(0,0,0,0.9)), url(${sidebarBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="lg:hidden absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/50 text-white"
          >
            ×
          </button>

          <div className="pt-12">
            <div className="text-3xl font-heading leading-7 tracking-wide">
              SPEEDEX
            </div>
            <div className="text-3xl font-heading leading-7 tracking-wide">
              GROUP
            </div>
          </div>
        </div>

        {/* Menu (whole aside scrolls) */}
        <nav className="px-4 pt-6 pb-6 space-y-2">
          {MENU.map((group) => {
            const GroupIcon = ICONS[group.icon];

            // leaf (no children)
            if (!group.items || group.items.length === 0) {
              return (
                <NavLink
                  key={group.label}
                  to={group.href ?? "#"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                      "no-underline hover:no-underline",
                      isActive
                        ? "bg-primary/80 text-white hover:text-white"
                        : "hover:bg-white/10 text-white/90 hover:text-white",
                    ].join(" ")
                  }
                >
                  <GroupIcon className="w-5 h-5 text-white/90" />
                  <span className="text-[15px]">{group.label}</span>
                </NavLink>
              );
            }

            // with children (collapsible)
            const openGroup = expanded.get(group.label) ?? false;
            return (
              <div key={group.label}>
                <button
                  type="button"
                  onClick={() => toggle(group.label)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-white/90"
                >
                  <GroupIcon className="w-5 h-5 text-white/90" />
                  <span className="flex-1 text-[15px] text-left">
                    {group.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openGroup ? "rotate-180" : ""}`}
                  />
                </button>

                {openGroup && (
                  <div className="mt-2 pl-2 space-y-2">
                    {group.items.map((it) => {
                      const ItIcon = it.icon ? ICONS[it.icon] : undefined;
                      return (
                        <NavLink
                          key={it.label}
                          to={it.href ?? "#"}
                          onClick={onClose}
                          className={({ isActive }) =>
                            [
                              "flex items-center gap-3 px-4 py-2 rounded-2xl",
                              "no-underline hover:no-underline",
                              isActive
                                ? "bg-primary text-white hover:text-white"
                                : "hover:bg-white/10 text-white/90 hover:text-white",
                            ].join(" ")
                          }
                        >
                          {ItIcon ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-black">
                              <ItIcon className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="w-7" />
                          )}
                          <span className="text-[15px]">{it.label}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
