import React from "react";
import { DiceSix } from "@phosphor-icons/react";

type Props = {
  content: string;
  onClick: () => void;
};

const RerollPlayerButton: React.FC<Props> = ({ onClick, content }) => {
  return (
    <div
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#505050] py-2 text-sm text-white hover:bg-[#353535]"
      onClick={onClick}
    >
      <DiceSix size={24} color="#fafafa" weight="duotone" />
      <div>{content}</div>
    </div>
  );
};

export default RerollPlayerButton;
