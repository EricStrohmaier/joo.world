import { Link } from "react-router-dom";
import { useTheme } from "../../logic/queries/useTheme";

interface ButtonProps {
  titleVisible?: string;
  title?: string;
  href?: string;
  style?: string;
  svg?: string;
  textStyle?: string;
  onClick?: () => void;
}

export default function ActionButton(props: ButtonProps) {
  const { title, titleVisible, textStyle, href, style, svg } = props;
  const { darkMode } = useTheme();
  const darkStyle = darkMode
    ? "bg-secondaryDark text-textDark"
    : "bg-secondaryLight border-gray-300 text-black";

  return (
    <div>
      <Link to={href || ""} className="w-full ">
        <div
          title={title}
          className={`flex justify-center ${darkStyle} hover:shadow-md border-2 rounded-[70px] w-fit p-1 shadow-md transition duration-0 ${style}`}
          onClick={props.onClick}
        >
          {" "}
          {svg && (
            <img
              src={svg}
              className="max-w-6 max-h-6"
              style={darkMode ? { filter: "invert(1)" } : {}}
            />
          )}
          {titleVisible && (
            <p className={`text-sm ${textStyle}`}> {titleVisible}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
