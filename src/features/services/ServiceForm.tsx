import React, { useState } from "react";

interface ServiceFormProps {
  onSubmit: (title: string, description: string, price: number) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);

  return (
    <form
      className="space-y-4 p-4 bg-white shadow rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(title, description, price);
      }}
    >
      <input
        type="text"
        placeholder="Service title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
      >
        Save Service
      </button>
    </form>
  );
};

export default ServiceForm;
