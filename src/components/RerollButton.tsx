import React from "react";
import { DiceSix } from "@phosphor-icons/react";

const RerollButton = () => {
  return (
    <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7234d6] py-2 text-sm text-white hover:bg-[#6225c5]">
      <DiceSix size={24} color="#fafafa" weight="duotone" />
      <div>Reroll Question</div>
    </div>
  );
};

export default RerollButton;
