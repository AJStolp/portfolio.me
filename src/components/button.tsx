import React from "react";

interface IButtonTypes {
  onClick: () => void;
  children?: React.ReactNode;
  buttontype: "primary" | "secondary" | "submit";
  className: string;
}

const ButtonTypes: React.FC<IButtonTypes> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonTypes;
