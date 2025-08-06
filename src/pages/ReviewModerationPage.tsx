import React, { useState } from "react";
import Modal from "/Users/Cley/Downloads/Building/my-app/src/Admin/ReviewModeration.tsx";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const ReviewModerationPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example: Replace with API value

  const handleDeleteReview = () => {
    console.log("Review deleted!");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Review Moderation</h1>

        {/* Example review list */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-gray-800">"Great service!" - John Doe</p>
            <Button
              label="Delete"
              variant="danger"
              size="small"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-gray-800">"Excellent work!" - Jane Smith</p>
            <Button
              label="Delete"
              variant="danger"
              size="small"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      {/* Modal for confirmation */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Delete"
        footer={
          <>
            <Button
              label="Cancel"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            />
            <Button
              label="Delete"
              variant="danger"
              onClick={handleDeleteReview}
            />
          </>
        }
      >
        Are you sure you want to delete this review? This action cannot be undone.
      </Modal>
    </div>
  );
};

export default ReviewModerationPage;
