import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProfilePage from "./pages/Profilepages";  
import ServiceManagementPage from "./pages/ServiceManagementPage";
import UserManagementPage from "./pages/UserManagementPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewModerationPage from "./pages/ReviewModerationPage";
import DisputeResolutionPage from "./pages/DisputeResolutionPage";
import LoginPage from "./pages/LoginPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/disputes" element={<DisputeResolutionPage />} />
          <Route path="/admin/reviews" element={<ReviewModerationPage />} />
          <Route path="/admin/services" element={<ServiceManagementPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/users" element={<UserManagementPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
