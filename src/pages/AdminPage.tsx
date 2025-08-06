import React from "react";
import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from "../Admin/AdminDashboard";

const AdminPage: React.FC = () => {
  return (
    <AdminLayout title="Admin Dashboard">
      <AdminDashboard />
    </AdminLayout>
  );
};

export default AdminPage;
