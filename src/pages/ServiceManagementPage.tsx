import React from "react";
import AdminLayout from "../Admin/AdminLayout";
import ServiceManagement from "../Admin/ServiceManagement";

const ServiceManagementPage: React.FC = () => {
  return (
    <AdminLayout title="Manage Services">
      <ServiceManagement />
    </AdminLayout>
  );
};

export default ServiceManagementPage;
