import React from "react";
import DisputeResolution from "./DisputeResolution";


const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Active Services</h2>
          <p className="text-2xl font-bold text-green-600">45</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Pending Disputes</h2>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
      </div>

      {/* Users Management */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Jane Doe</td>
              <td className="border p-2">Provider</td>
              <td className="border p-2 text-green-600">Active</td>
              <td className="border p-2">
                <button className="text-red-600 hover:underline">Suspend</button>
              </td>
            </tr>
            <tr>
              <td className="border p-2">John Smith</td>
              <td className="border p-2">Client</td>
              <td className="border p-2 text-yellow-600">Flagged</td>
              <td className="border p-2">
                <button className="text-red-600 hover:underline">Review</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dispute Resolution */}
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Dispute Resolution</h2>
        <div className="border p-3 rounded mb-2">
          <p><strong>Case #1023:</strong> Service cancellation dispute between Jane and Sarah.</p>
          <button className="mt-2 text-blue-600 hover:underline">Review Case</button>
        </div>
        <div className="border p-3 rounded">
          <p><strong>Case #1024:</strong> Review flagged for harassment by John.</p>
          <button className="mt-2 text-blue-600 hover:underline">Review Case</button>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
        <ul className="space-y-2">
          <li className="border p-2 rounded">
            <p><strong>Jane:</strong> Great service! ⭐⭐⭐⭐⭐</p>
            <button className="text-red-600 hover:underline">Delete</button>
          </li>
          <li className="border p-2 rounded">
            <p><strong>Mike:</strong> Very unprofessional. ⭐⭐</p>
            <button className="text-red-600 hover:underline">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
