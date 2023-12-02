import React from "react";

type Props = {
  checked: boolean;
  content?: string;
  onClick?: () => void;
};

const Choice: React.FC<Props> = ({ content, checked, onClick }) => {
  return (
    <div className="flex items-center gap-1">
      <div
        className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"
        onClick={onClick}
      >
        <div
          className={`h-full w-full transform-gpu rounded-full bg-purple-700 duration-500 ${
            checked ? "scale-75 " : "scale-0 "
          }`}
        />
      </div>
      <div className="text-sm">{content ? content : "No content"}</div>
    </div>
  );
};

export default Choice;
