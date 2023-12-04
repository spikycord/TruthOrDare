import React, { useState } from "react";
import SettingModal from "./SettingModal";
import { Trash } from "@phosphor-icons/react";
import Chip from "../Chip";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  playerList: string[];
  setPlayerList: React.Dispatch<React.SetStateAction<string[]>>;
};

const AddPlayer: React.FC<Props> = ({
  setModal,
  className,
  playerList,
  setPlayerList,
}) => {
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <SettingModal
      clickClose={() => setModal(false)}
      className={className + " h-fit max-h-[90vh] w-[512px] max-w-[90vw]"}
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
            className="w-[50%] rounded-lg border border-slate-700 bg-black px-4 py-2 text-sm text-white hover:bg-slate-800 sm:w-auto sm:flex-[2]"
            placeholder="enter a name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <div
            className=" flex-[1] rounded-lg bg-[#7234d6] py-2 text-center text-sm text-white hover:bg-[#6225c5]"
            onClick={() => {
              if (playerName) {
                let cnt = 2;
                let name = playerName.trim();
                while (playerList.includes(name)) {
                  name = name + ` (${cnt})`;
                  cnt++;
                }
                setPlayerList([...playerList, playerName]);
                setPlayerName("");
              }
            }}
          >
            add to game
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {playerList.map((player) => (
            <Chip
              content={player}
              isCanDelete
              onClick={() =>
                setPlayerList(playerList.filter((name) => name !== player))
              }
            />
          ))}
        </div>
        <div className="h-[64px] w-full"></div>
      </div>
    </SettingModal>
  );
};

export default AddPlayer;
