import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout({ children }: PropsWithChildren) {
  // Keep your footer etc. — render children OR <Outlet />
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="container-app">{children ?? <Outlet />}</div>
      </main>
      <footer className="text-center py-4 bg-primary text-white text-sm">
        © {new Date().getFullYear()} — All rights reserved
      </footer>
    </div>
  );
}
