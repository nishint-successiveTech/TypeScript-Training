import Weather from "@/components/assignment-1/Weather";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          3.Create a functional component named Weather that accepts a prop
          called temperature (a number). Display a message like Its sunny today
          if the temperature is above 25°C and Its cold today! if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </h1>
        <br></br>
        <Weather temp={90} />
        <Weather temp={8} />
      </center>
    </div>
  );
};

export default page;
