import React from "react";
import SettingModal from "./SettingModal";
import { Wrench, Fire, Rewind } from "@phosphor-icons/react";
import Choice from "../GameSetting/Choice";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  setting: Setting;
  setSetting: React.Dispatch<React.SetStateAction<Setting>>;
};

type ModeSetting = "PG" | "PG-13" | "R" | "GAY";
type GameSetting = "Truth or Dare" | "Truth" | "Dare";
export type Setting = {
  mode: ModeSetting;
  gameSetting: GameSetting;
};

const GameSetting: React.FC<Props> = ({
  setModal,
  className,
  setting,
  setSetting,
}) => {
  return (
    <SettingModal
      clickClose={() => setModal(false)}
      className={className + " h-[432px] max-h-[90vh] w-[512px] max-w-[90vw]"}
    >
      <div className="relative flex h-full flex-col gap-3 p-6 text-white">
        <div
          onClick={() =>
            setSetting({
              mode: "PG-13",
              gameSetting: "Truth or Dare",
            })
          }
          className="absolute bottom-6 right-6 flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-3 py-2 text-sm text-white hover:bg-gray-800"
        >
          <Rewind size={24} color="#fafafa" weight="duotone" />
          <div>Reset to default</div>
        </div>

        <div className="mb-2">Game Settings</div>
        <div className="mb-1 flex items-center gap-1">
          <Wrench className="mr-1" size={16} color="#fafafa" weight="duotone" />
          <div>Mode</div>
        </div>
        <Choice
          content="Truth or Dare"
          checked={setting.gameSetting === "Truth or Dare"}
          onClick={() => {
            setSetting({
              ...setting,
              gameSetting: "Truth or Dare",
            });
          }}
        />
        <Choice
          content="Truth"
          checked={setting.gameSetting === "Truth"}
          onClick={() => {
            setSetting({
              ...setting,
              gameSetting: "Truth",
            });
          }}
        />
        <Choice
          content="Dare"
          checked={setting.gameSetting === "Dare"}
          onClick={() => {
            setSetting({
              ...setting,
              gameSetting: "Dare",
            });
          }}
        />

        <div className="mb-1 mt-2 flex items-center gap-1">
          <Fire className="mr-1" size={16} color="#fafafa" weight="duotone" />
          <div>Mode</div>
        </div>
        <Choice
          content="PG"
          checked={setting.mode === "PG"}
          onClick={() => {
            setSetting({
              ...setting,
              mode: "PG",
            });
          }}
        />
        <Choice
          content="PG-13"
          checked={setting.mode === "PG-13"}
          onClick={() => {
            setSetting({
              ...setting,
              mode: "PG-13",
            });
          }}
        />
        <Choice
          content="R"
          checked={setting.mode === "R"}
          onClick={() => {
            setSetting({
              ...setting,
              mode: "R",
            });
          }}
        />
        <Choice
          content="GAY"
          checked={setting.mode === "GAY"}
          onClick={() => {
            setSetting({
              ...setting,
              mode: "GAY",
            });
          }}
        />
      </div>
    </SettingModal>
  );
};

export default GameSetting;
