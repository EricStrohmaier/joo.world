import React from "react";
import {  Link } from "react-router-dom";
import { useTheme } from "../../logic/theme/useTheme";

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

  const { darkMode } = useTheme();

const activeUrl = window.location.pathname;
const activeLink = activeUrl === href 
if(activeLink){
  style = darkMode ? "p-1 px-2 bg-backgroundDark bg-opacity-75" : "p-1 px-2 bg-backgroundLight bg-opacity-90"
}

  return (
    <div className={`${activeLink} w-full`}>
      <Link to={href || ""}    
      > 
        <div
          className={`flex justify-start items-center  rounded-[10px]  ${style}`}
        >
          {imgUrl && (
            <div className="w-[34px] h-[34px] lg:mr-2 rounded-[10px] flex justify-center items-center">
              {" "}
              <img
                src={imgUrl}
                className={`w-full h-full overflow-hidden rounded-[8px] z-0 ${imgStyles}`}
                style={darkMode ? { filter: "invert(1)" } : {}}
              />
            </div>
          )}

          {title && (
            <div className="items-center justify-center hidden font-bold text-center text-md h-fit w-fit lg:flex">
              <div>{title}</div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Button;
