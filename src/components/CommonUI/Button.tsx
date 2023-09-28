import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  href: string;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ title, href, style }) => {
  return (
    <div>
      <Link to={href} className="w-fit">
        <button
          className={`flex justify-center p-3 rounded-[10px] transition duration-100 ${style}`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default Button;
