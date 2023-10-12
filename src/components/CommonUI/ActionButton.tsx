import { Link } from "react-router-dom";

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

  return (
    <div>
      <Link to={href || ""} className="w-full">
        <button
          title={title}
          className={`flex justify-center bg-gray-50 hover:shadow-md border-2 rounded-[70px] w-fit p-1 shadow-sm transiton duration-100 ${style}`}
        >
          {" "}
          {svg && <img src={svg} className="max-w-6 max-h-6" />}
          {titleVisible && (
            <p className={`text-sm ${textStyle}`}> {titleVisible}</p>
          )}
        </button>
      </Link>
    </div>
  );
}
