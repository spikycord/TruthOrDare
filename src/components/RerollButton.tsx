import React from "react";
import { DiceSix } from "@phosphor-icons/react";

type Props = {
  onClick: () => void;
};

const RerollButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7234d6] py-2 text-sm text-white hover:bg-[#6225c5]"
      onClick={onClick}
    >
      <DiceSix size={24} color="#fafafa" weight="duotone" />
      <div>Reroll Question</div>
    </div>
  );
};

export default RerollButton;
