import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ServiceListProps {
  services: Service[];
  onBook?: (id: number) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, onBook }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.length > 0 ? (
        services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            onBook={onBook ? () => onBook(service.id) : undefined}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">
          No services available
        </p>
      )}
    </div>
  );
};

export default ServiceList;
