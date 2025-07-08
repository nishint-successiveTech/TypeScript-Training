import Button from "@/components/assignment-1/Button";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          6.Create a functional component named Button that accepts props for
          text and color. Style the button using inline styles or CSS classes
          based on the color prop. Import and render the Button component in the
          App component with different text and color props.
        </h1>
        <br></br>
        <Button text="HELLO" color="blue" />
        <Button text="WORLD" color="yellow" />
      </center>
    </div>
  );
};

export default page;
