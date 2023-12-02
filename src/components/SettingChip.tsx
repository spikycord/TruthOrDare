import React from "react";

type Props = {
  content?: string;
};

const SettingChip: React.FC<Props> = ({ content }) => {
  return (
    <div className="rounded-lg bg-[#7234d6] px-2 py-[2px] text-white hover:bg-[#6225c5]">
      {content ? content : "No Conntent"}
    </div>
  );
};

export default SettingChip;
