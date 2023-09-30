interface ButtonProps {
  title?: string;
  href?: string;
  style?: string;
  svg?: string;
}

export default function ActionButton(props: ButtonProps) {
  const { title, href, style, svg } = props;

  return (
    <div>
      <a href={href} className="w-fit ">
        <button
          className={`flex justify-center bg-gray-50 hover:shadow-md border-2 rounded-[70px] w-fit p-1 px-2 shadow-sm transiton duration-100 ${style}`}
        >
          {" "}
          {svg && <img src={svg} className="max-w-6 max-h-6 mr-1" />}
          {title && <p className="text-sm"> {title}</p>}
        </button>
      </a>
    </div>
  );
}
