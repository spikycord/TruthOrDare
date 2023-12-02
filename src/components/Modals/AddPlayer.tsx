import React from "react";
import SettingModal from "./SettingModal";
import { Trash } from "@phosphor-icons/react";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const AddPlayer: React.FC<Props> = ({ setModal, className }) => {
  return (
    <SettingModal
      clickClose={() => setModal(false)}
      className={className + " h-fit w-[512px]"}
    >
      <div className="relative flex h-full flex-col gap-3 p-6 text-white">
        <div className="absolute bottom-6 right-6 flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-800">
          <Trash size={16} color="#fafafa" weight="duotone" />
          <div>Clear Players</div>
        </div>

        <div className="mb-2">Add Players</div>
        <div className="mb-1 flex items-center gap-1 text-sm opacity-70">
          A player will be randomly selected for every reroll.
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <input
            className=" flex-[2] rounded-lg border border-slate-700 bg-black px-4 py-[10px] text-sm text-white hover:bg-slate-800"
            placeholder="enter a name"
          />
          <div className=" flex-[1] rounded-lg bg-[#7234d6] py-[10px] text-center text-sm text-white hover:bg-[#6225c5]">
            add to game
          </div>
        </div>

        {/* This should be player name list */}
        <div className="h-[64px] w-full"></div>
      </div>
    </SettingModal>
  );
};

export default AddPlayer;
