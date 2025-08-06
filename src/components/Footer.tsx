import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Beautify Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
