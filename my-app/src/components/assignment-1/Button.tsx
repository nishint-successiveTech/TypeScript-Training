import React from "react";
interface colorType {
  text: string;
  color: string;
}
const Button = ({ text, color }: colorType) => {
  return (
    <div>
      <h1 style={{ backgroundColor: color }}>{text}</h1>
    </div>
  );
};

export default Button;
