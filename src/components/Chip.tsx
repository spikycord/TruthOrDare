import React from "react";
import { X } from "@phosphor-icons/react";

type Props = {
  content?: string;
  isCanDelete?: boolean;
  onClick?: () => void;
};

const Chip: React.FC<Props> = ({ content, isCanDelete, onClick }) => {
  return (
    <div className="flex items-center justify-center gap-1 rounded-lg bg-[#7234d6] px-2 py-1 text-white hover:bg-[#6225c5]">
      <div className="h-full">{content ? content : "No Conntent"}</div>
      {isCanDelete && (
        <X size={16} color="#fafafa" weight="duotone" onClick={onClick} />
      )}
    </div>
  );
};

export default Chip;
