import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  role: "Client" | "Provider";
  email: string;
  status: "Active" | "Blocked" | "Deleted";
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice", role: "Provider", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob", role: "Client", email: "bob@example.com", status: "Blocked" },
  ]);

  const toggleBlockUser = (id: number) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id
          ? { ...user, status: user.status === "Blocked" ? "Active" : "Blocked" }
          : user
      )
    );
  };

  const deleteUser = (id: number) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, status: "Deleted" } : user
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      {users.length === 0 && (
        <p className="text-gray-600">No users found.</p>
      )}

      {users.map(user => (
        <div
          key={user.id}
          className="border rounded p-4 mb-4 bg-gray-50"
        >
          <p className="font-semibold">{user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <p className="mt-1 font-semibold">
            Status:{" "}
            <span
              className={
                user.status === "Active"
                  ? "text-green-600"
                  : user.status === "Blocked"
                  ? "text-yellow-600"
                  : "text-red-600"
              }
            >
              {user.status}
            </span>
          </p>

          {user.status !== "Deleted" && (
            <div className="mt-3 space-x-3">
              <button
                onClick={() => toggleBlockUser(user.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                {user.status === "Blocked" ? "Unblock" : "Block"}
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
