import React from "react";

interface UserCardsProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const UserCard = ({ name, email, avatarUrl }: UserCardsProps) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
      <img
        src={avatarUrl}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      ></img>
    </div>
  );
};

export default UserCard;
