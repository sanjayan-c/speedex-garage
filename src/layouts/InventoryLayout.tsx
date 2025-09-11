import { Outlet } from "react-router-dom";

export default function InventoryLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* you can add an Inventory-specific sidebar/header later */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
