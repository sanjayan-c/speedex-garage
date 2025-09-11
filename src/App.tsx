import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import InventoryLayout from "./layouts/InventoryLayout";
import LoginPage from "./pages/auth/LoginPage";

// example pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import InventoryHome from "./pages/inventory/InventoryHome";

export default function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* App (dashboard) routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardHome />} />
        {/* add more: /app/mechanical, /app/invoice, etc. */}
      </Route>

      {/* Inventory routes */}
      <Route element={<InventoryLayout />}>
        <Route path="/inventory" element={<InventoryHome />} />
        {/* later: /inventory/parts, /inventory/suppliers, ... */}
      </Route>

      {/* Default/404 */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
