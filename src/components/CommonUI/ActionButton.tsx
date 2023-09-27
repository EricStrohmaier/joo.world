import React from "react";

interface ButtonProps {
  title: string;
  href?: string;
  style?: string;
}

export default function ActionButton(props: ButtonProps) {
  const { title, href, style } = props;

  return (
    <div>
      <a href={href} className="w-fit ">
        <button
          className={`flex justify-center bg-gray-50 hover:shadow-md border-2 rounded-[70px] w-fit p-1 px-2 shadow-sm transiton duration-100 ${style}`}
        >
          {title}
        </button>
      </a>
    </div>
  );
}
