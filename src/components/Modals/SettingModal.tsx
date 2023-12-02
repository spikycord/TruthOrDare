import React from "react";
import { X } from "@phosphor-icons/react";

type Props = {
  clickClose: () => void;
  className?: string;
  children?: React.ReactNode;
};

const SettingModal: React.FC<Props> = ({ children, className, clickClose }) => {
  return (
    <div
      className={
        "absolute bottom-0 top-0 z-50 m-auto rounded-lg border border-slate-700 bg-primary " +
        className
      }
    >
      <div className="relative h-full w-full bg-primary">
        <X
          size={18}
          color="#fafafa"
          weight="duotone"
          className="absolute right-4 top-4 z-50 cursor-pointer rounded-full transition-all duration-500 hover:scale-125"
          onClick={clickClose}
        />
        {children}
      </div>
    </div>
  );
};

export default SettingModal;
