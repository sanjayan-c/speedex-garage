// InventoryLayout.tsx
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

export default function InventoryLayout() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Layout.Content className="flex-1 p-6">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
