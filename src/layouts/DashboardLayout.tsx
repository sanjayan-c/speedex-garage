import { PropsWithChildren, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/MobileNavbar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Layout className="min-h-screen bg-gray-50 !flex-row">
      {/* Sidebar on the left */}
      <Sidebar activePath={pathname} open={open} onClose={() => setOpen(false)} />

      {/* Main column on the right */}
      <Layout className="flex flex-col flex-1">
        <Navbar onOpenMenu={() => setOpen(true)} />

        <Layout.Content className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto app-content">
          {children ?? <Outlet />}
        </Layout.Content>

        <Layout.Footer className="!text-center !py-4 !bg-primary !text-white !text-sm">
          © {new Date().getFullYear()} — All rights reserved
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
