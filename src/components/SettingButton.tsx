import React from "react";

type Props = {
  Icon: React.ElementType;
  content: string;
  onClick?: () => void;
};

const SettingButton: React.FC<Props> = ({ Icon, content, onClick }) => {
  return (
    <div
      className="flex flex-row items-center gap-1 rounded-lg border border-slate-700 bg-black px-2 py-1 text-white hover:bg-slate-800"
      onClick={onClick}
    >
      <Icon size={18} color="#fafafa" weight="duotone" />
      <div>{content ? content : "No Content"}</div>
    </div>
  );
};

export default SettingButton;
