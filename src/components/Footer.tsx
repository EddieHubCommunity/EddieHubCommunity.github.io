import React from "react";
import { FooterData } from "../data/data";

const Footer: React.FC<FooterData> = ({ link, i, text }): JSX.Element => {
  return (
    <a
      href={link}
      className="inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <i className={i}></i>
      {text}
    </a>
  );
};

export default Footer;
