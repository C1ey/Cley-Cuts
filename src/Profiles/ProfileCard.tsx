import React from "react";

interface ProfileCardProps {
  name: string;
  role: "Client" | "Service Provider";
  bio: string;
  rating?: number;
  imageUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  rating,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img
        src={imageUrl || "https://via.placeholder.com/100"}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
      {rating && <p className="text-yellow-500 mt-2">⭐ {rating}/5</p>}
      <p className="text-gray-700 mt-3">{bio}</p>
    </div>
  );
};

export default ProfileCard;
