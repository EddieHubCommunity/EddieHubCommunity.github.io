import React from "react";
import { SingleBadge } from "../data/data";

const Badge: React.FC<SingleBadge> = ({ title, classes }): JSX.Element => {
  return (
    <button className={`rounded px-1 mr-1 text-sm ml-auto ${classes}`}>
      {title}
    </button>
  );
};

export default Badge;
