import React from "react";

interface Hero {
  title: string;
  className: string;
  children: React.ReactNode;
}

export const Hero: React.FC<Hero> = ({ title, className, children }) => {
  return <div></div>;
};
