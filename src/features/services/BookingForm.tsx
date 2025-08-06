import React, { useState } from "react";

interface BookingFormProps {
  services: string[];
  onSubmit: (service: string, date: string, time: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ services, onSubmit }) => {
  const [service, setService] = useState(services[0] || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <form
      className="space-y-4 p-4 bg-white shadow rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(service, date, time);
      }}
    >
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full border p-2 rounded"
      >
        {services.map((svc, i) => (
          <option key={i} value={svc}>
            {svc}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Book Service
      </button>
    </form>
  );
};

export default BookingForm;
