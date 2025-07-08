import UserCard from "@/components/assignment-1/UserCard";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          2.Create a functional component named UserCard that accepts the
          following props: name, email, and avatarURL. Use the props to display
          the user name, email, and an image (avatar) in the UserCard component.
          Create multiple instances of the UserCard component with different
          user data.
        </h1>
        <br></br>
        <UserCard
          name={"Virat"}
          email={"Virat001@gmail.com"}
          avatarUrl={"/image.png"}
        />
        <br />
        <UserCard
          name={"Virat"}
          email={"Virat002@gmail.com"}
          avatarUrl={"/image copy.png"}
        />

        <br />
        <UserCard
          name={"Virat"}
          email={"Virat003@gmail.com"}
          avatarUrl={"/image copy 2.png"}
        />
      </center>
    </div>
  );
};

export default page;
