import React, { useState } from "react";
import ProfileCard from "../Profiles/ProfileCard";
import ProfileForm from "../Profiles/ProfileForm";
import CommentList from "../Profiles/CommentList";
import ReviewCard from "../Profiles/ReviewCard";
import ReviewForm from "../Profiles/ReviewForm";

const ProfilePage: React.FC = () => {
  // Example profile data (replace with backend later)
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    role: "Service Provider" as "Client" | "Service Provider",
    bio: "Professional beautician with 5 years of experience.",
    rating: 4.8,
    imageUrl: "",
  });

  const [comments] = useState([
    { id: 1, author: "John Smith", content: "Great work!", date: "2025-07-30" },
    { id: 2, author: "Mary Johnson", content: "Very professional!", date: "2025-07-25" },
  ]);

  const [reviews, setReviews] = useState([
    {
      reviewer: "John Smith",
      rating: 5,
      comment: "Amazing service!",
      date: "2025-07-30",
    },
  ]);

  // Handle profile update
  const handleProfileSave = (name: string, bio: string) => {
    setProfile({ ...profile, name, bio });
    console.log("Profile updated:", { name, bio });
  };

  // Handle new review submission
  const handleReviewSubmit = (rating: number, comment: string) => {
    setReviews([
      ...reviews,
      { reviewer: "Anonymous", rating, comment, date: new Date().toISOString().split("T")[0] },
    ]);
    console.log("Review submitted:", { rating, comment });
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      {/* Profile Card */}
      <ProfileCard
        name={profile.name}
        role={profile.role}
        bio={profile.bio}
        rating={profile.rating}
        imageUrl={profile.imageUrl}
      />

      {/* Edit Profile Form */}
      <ProfileForm
        initialName={profile.name}
        initialBio={profile.bio}
        onSave={handleProfileSave}
      />

      {/* Reviews Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            reviewer={review.reviewer}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
          />
        ))}
        <ReviewForm onSubmit={handleReviewSubmit} />
      </section>

      {/* Comments Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <CommentList comments={comments} />
      </section>
    </div>
  );
};

export default ProfilePage;
