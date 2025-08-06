import React, { useState } from "react";
import Button from "../components/Button";

interface ProfileFormProps {
  initialName?: string;
  initialBio?: string;
  onSave: (name: string, bio: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  initialName = "",
  initialBio = "",
  onSave,
}) => {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name, bio);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4"
    >
      <div>
        <label className="block font-medium">Name</label>
        <input
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium">Bio</label>
        <textarea
          className="border p-2 rounded w-full"
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <Button label="Save Profile" type="submit" variant="primary" />
    </form>
  );
};

export default ProfileForm;
