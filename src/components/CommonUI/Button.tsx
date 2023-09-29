import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  title?: string;
  href: string;
  style?: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ url, title, href, style }) => {
  return (
    <div>
      <Link to={href} className="w-fit">
        <div
          className={`flex justify-center rounded-[10px] transition duration-100 ${style}`}
        >
          {url && (
            <div className="w-[50px] h-[50px] border-2 border-gray-200 rounded-[10px]">
              {" "}
              <img
                src={url}
                className="w-full h-full overflow-hidden rounded-[8px] z-0"
              />
            </div>
          )}

          {title && <div className="text-md font-bold">{title}</div>}
        </div>
      </Link>
    </div>
  );
};

export default Button;
