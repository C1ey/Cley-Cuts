import React from "react";

interface BookingCardProps {
  serviceName: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  onCancel?: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  serviceName,
  date,
  time,
  status,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{serviceName}</h3>
        <p className="text-sm text-gray-500">
          {date} at {time}
        </p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            status === "confirmed"
              ? "bg-green-100 text-green-700"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>
      {status !== "cancelled" && (
        <button
          onClick={onCancel}
          className="text-red-500 hover:underline"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default BookingCard;
