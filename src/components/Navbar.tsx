import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          Beautify Platform Admin
        </h1>
        <div className="space-x-4">
          <Link to="/admin/disputes" className="hover:underline">Disputes</Link>
          <Link to="/admin/reviews" className="hover:underline">Reviews</Link>
          <Link to="/admin/services" className="hover:underline">Services</Link>
          <Link to="/admin/users" className="hover:underline">Users</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
