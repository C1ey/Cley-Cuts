import React, { useState } from "react";

interface Service {
  id: number;
  providerName: string;
  serviceName: string;
  category: string;
  price: number;
  status: "Pending" | "Approved" | "Removed";
}

const ServiceManagement: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      providerName: "Alice",
      serviceName: "Hair Styling",
      category: "Beauty",
      price: 50,
      status: "Pending",
    },
    {
      id: 2,
      providerName: "Bob",
      serviceName: "Nail Art",
      category: "Nails",
      price: 40,
      status: "Approved",
    },
  ]);

  const approveService = (id: number) => {
    setServices(prev =>
      prev.map(s =>
        s.id === id ? { ...s, status: "Approved" } : s
      )
    );
  };

  const removeService = (id: number) => {
    setServices(prev =>
      prev.map(s =>
        s.id === id ? { ...s, status: "Removed" } : s
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Service Management</h2>

      {services.length === 0 && (
        <p className="text-gray-600">No services to manage.</p>
      )}

      {services.map(service => (
        <div
          key={service.id}
          className="border rounded p-4 mb-4 bg-gray-50"
        >
          <p>
            <span className="font-semibold">{service.serviceName}</span> by{" "}
            <span className="font-semibold">{service.providerName}</span>
          </p>
          <p>Category: {service.category}</p>
          <p>Price: ${service.price}</p>
          <p className="mt-1 font-semibold">
            Status:{" "}
            <span
              className={
                service.status === "Pending"
                  ? "text-yellow-600"
                  : service.status === "Approved"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {service.status}
            </span>
          </p>

          {service.status === "Pending" && (
            <div className="mt-3 space-x-3">
              <button
                onClick={() => approveService(service.id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Approve
              </button>
              <button
                onClick={() => removeService(service.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceManagement;
