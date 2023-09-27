import React from "react";

interface ButtonProps {
  title: string;
  href?: string;
  style?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { title, href, style } = props;

  return (
    <div>
      <a href={href} className="w-fit ">
        <button
          className={`flex justify-center p-3 rounded-[10px] transiton duration-100 ${style}`}
        >
          {title}
        </button>
      </a>
    </div>
  );
}
