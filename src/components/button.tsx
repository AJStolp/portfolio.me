import React from "react";

interface IButtonTypes {
  onClick: () => void;
  children?: React.ReactNode;
  buttontype: "primary" | "secondary" | "submit";
  className: string;
  srLabel: string;
}

const ButtonTypes: React.FC<IButtonTypes> = ({
  srLabel,
  children,
  ...props
}) => {
  return (
    <button {...props} aria-label={srLabel}>
      {children}
    </button>
  );
};

export default ButtonTypes;
