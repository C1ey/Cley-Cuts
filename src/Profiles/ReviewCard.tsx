import React from "react";

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewer,
  rating,
  comment,
  date,
}) => {
  return (
    <div className="bg-white shadow p-4 rounded border border-gray-200">
      <div className="flex justify-between">
        <span className="font-semibold">{reviewer}</span>
        <span className="text-yellow-500">⭐ {rating}/5</span>
      </div>
      <p className="text-gray-700 mt-2">{comment}</p>
      <div className="text-sm text-gray-500 mt-1">{date}</div>
    </div>
  );
};

export default ReviewCard;
