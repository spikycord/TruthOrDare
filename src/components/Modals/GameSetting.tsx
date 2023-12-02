import React from "react";
import SettingModal from "./SettingModal";
import { Wrench, Fire, Rewind } from "@phosphor-icons/react";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const GameSetting: React.FC<Props> = ({ setModal, className }) => {
  return (
    <SettingModal
      clickClose={() => setModal(false)}
      className={className + " h-[432px] w-[512px] "}
    >
      <div className="relative flex h-full flex-col gap-3 p-6 text-white">
        <div className="absolute bottom-6 right-6 flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-3 py-2 text-sm text-white hover:bg-gray-800">
          <Rewind size={24} color="#fafafa" weight="duotone" />
          <div>Reset to default</div>
        </div>

        <div className="mb-2">Game Settings</div>
        <div className="mb-1 flex items-center gap-1">
          <Wrench className="mr-1" size={16} color="#fafafa" weight="duotone" />
          <div>Mode</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">Truth or Dare</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">Truth</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">Dare</div>
        </div>

        <div className="mb-1 mt-2 flex items-center gap-1">
          <Fire className="mr-1" size={16} color="#fafafa" weight="duotone" />
          <div>Mode</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">PG</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">PG-13</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="mr-1 h-4 w-4 rounded-full border-2 border-purple-700"></div>
          <div className="text-sm">R</div>
        </div>
      </div>
    </SettingModal>
  );
};

export default GameSetting;
