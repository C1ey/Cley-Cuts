import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  onBook?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  onBook,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <p className="text-blue-500 font-bold mb-3">${price}</p>
      {onBook && (
        <button
          onClick={onBook}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
