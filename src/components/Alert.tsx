import React from "react";

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
}

const alertColors = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const Alert: React.FC<AlertProps> = ({ type = "info", message }) => {
  return (
    <div
      className={`border-l-4 p-3 mb-4 rounded ${alertColors[type]}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
