// src/layouts/DashboardLayout.tsx
import { PropsWithChildren, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/MobileNavbar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Prevent body scroll when drawer open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar activePath={pathname} open={open} onClose={() => setOpen(false)} />

      <div className="flex flex-col flex-1">
        <Navbar onOpenMenu={() => setOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto app-content">
          {children ?? <Outlet />}
        </main>

        <footer className="text-center py-4 bg-primary text-white text-sm">
          © {new Date().getFullYear()} — All rights reserved
        </footer>
      </div>
    </div>
  );
}
