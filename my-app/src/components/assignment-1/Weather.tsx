import React from "react";

interface Weather {
  temp: number;
}

const Weather = ({ temp }: Weather) => {
  if (temp > 25) {
    return (
      <div>
        <h3>IT IS SUNNY TODAY {temp}</h3>
      </div>
    );
  }
  if (temp < 10) {
    return (
      <div>
        <h3>IT IS COLD TODAY {temp}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>IT IS MODERATE TODAY {temp}</h3>
    </div>
  );
};

export default Weather;
