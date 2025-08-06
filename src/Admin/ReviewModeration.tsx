import React, { useState } from "react";

interface Review {
  id: number;
  reviewerName: string;
  revieweeName: string;
  rating: number;
  comment: string;
  flaggedReason: string;
  status: "Pending" | "Approved" | "Deleted";
}

const ReviewModeration: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      reviewerName: "Alice",
      revieweeName: "Bob",
      rating: 2,
      comment: "The service was late and rude.",
      flaggedReason: "Inappropriate language",
      status: "Pending",
    },
    {
      id: 2,
      reviewerName: "Charlie",
      revieweeName: "Dana",
      rating: 1,
      comment: "Poor quality service, not as described.",
      flaggedReason: "False information",
      status: "Pending",
    },
  ]);

  const approveReview = (id: number) => {
    setReviews(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: "Approved" } : r
      )
    );
  };

  const deleteReview = (id: number) => {
    setReviews(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: "Deleted" } : r
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Review Moderation</h2>

      {reviews.length === 0 && (
        <p className="text-gray-600">No reviews to moderate.</p>
      )}

      {reviews.map(review => (
        <div
          key={review.id}
          className="border rounded p-4 mb-4 bg-gray-50"
        >
          <p>
            <span className="font-semibold">{review.reviewerName}</span> reviewed <span className="font-semibold">{review.revieweeName}</span>
          </p>
          <p>Rating: {review.rating} / 5</p>
          <p className="italic">"{review.comment}"</p>
          <p className="text-red-600 font-semibold">
            Flagged for: {review.flaggedReason}
          </p>
          <p className="mt-1 font-semibold">
            Status:{" "}
            <span
              className={
                review.status === "Pending"
                  ? "text-yellow-600"
                  : review.status === "Approved"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {review.status}
            </span>
          </p>

          {review.status === "Pending" && (
            <div className="mt-3 space-x-3">
              <button
                onClick={() => approveReview(review.id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Approve
              </button>
              <button
                onClick={() => deleteReview(review.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewModeration;
