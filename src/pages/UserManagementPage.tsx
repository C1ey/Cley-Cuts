import React, { useState, useEffect } from "react";
import AdminLayout from "../Admin/AdminLayout";
import UserManagement from "../Admin/UserManagement";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string; role: string }[]>([]);

  useEffect(() => {
    // Simulated fetch
    setUsers([
      { id: 1, name: "Jane Doe", role: "Service Provider" },
      { id: 2, name: "John Smith", role: "Client" },
    ]);
  }, []);

  return (
    <AdminLayout title="User Management">
      <UserManagement />
      <div className="bg-white shadow rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">Registered Users</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UserManagementPage;
