import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  title?: string;
  href?: string;
  style?: string;
  imgUrl?: string;
  imgStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  imgUrl,
  title,
  href,
  style,
  imgStyles,
}) => {
  return (
    <div className="w-full">
      <Link to={href || ""} className="">
        <div
          className={`flex justify-start items-center rounded-[10px] transition duration-100  ${style}`}
        >
          {imgUrl && (
            <div className="w-[34px] h-[34px] lg:mr-2 rounded-[10px] flex justify-center items-center">
              {" "}
              <img
                src={imgUrl}
                className={`w-full h-full  overflow-hidden rounded-[8px] z-0 ${imgStyles}`}
              />
            </div>
          )}

          {title && (
            <div className="text-md font-bold hidden h-fit w-fit lg:flex justify-center items-center text-center">
              <div>{title}</div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Button;
