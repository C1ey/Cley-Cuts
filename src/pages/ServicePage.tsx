import React, { useState, useEffect } from "react";

const ServicePage: React.FC = () => {
  const [services, setServices] = useState<{ id: number; name: string; price: string; provider: string }[]>([]);

  useEffect(() => {
    // Simulate API fetch
    setServices([
      { id: 1, name: "Haircut", price: "$30", provider: "Jane Doe" },
      { id: 2, name: "Facial", price: "$50", provider: "John Smith" },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Services</h1>
      <p className="text-gray-600 mb-6">Browse services offered by our providers here.</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-gray-600">Provider: {service.provider}</p>
            <p className="text-gray-800 font-bold">{service.price}</p>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
