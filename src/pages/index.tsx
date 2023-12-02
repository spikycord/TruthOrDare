import Head from "next/head";
import { Fire, Gear, UserList, Wrench } from "@phosphor-icons/react";
import RerollButton from "@/components/RerollButton";
import SettingButton from "@/components/SettingButton";
import SettingChip from "@/components/SettingChip";
import { useState } from "react";
import SettingModal from "@/components/Modals/SettingModal";
import GameSetting from "@/components/Modals/GameSetting";
import AddPlayer from "@/components/Modals/AddPlayer";

export default function Home() {
  const [openGameSetting, setOpenGameSetting] = useState(false);
  const [openAddPlayer, setOpenAddPlayer] = useState(false);

  return (
    <>
      <Head>
        <title>Truth or Dare</title>
        <meta name="description" content="Truth Or Dare App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-[100vh] w-[100vw]">
        <div className="flex h-full w-full justify-center bg-primary p-2">
          <GameSetting
            setModal={setOpenGameSetting}
            className={`transition-gpu duration-500 ${
              openGameSetting ? " scale-100" : "scale-0"
            }`}
          />
          <AddPlayer
            setModal={() => setOpenAddPlayer(false)}
            className={`transition-gpu duration-500 ${
              openAddPlayer ? " scale-100" : "scale-0"
            }`}
          />
          <div
            className={`flex h-full w-[600px] flex-col items-center justify-center gap-4 ${
              openGameSetting || openAddPlayer ? "blur-sm" : ""
            }`}
          >
            <div className="text-4xl font-semibold text-white">
              Truth or Dare
            </div>
            <div className="flex gap-2 text-sm text-white">
              <SettingButton
                Icon={Gear}
                content="Game Setting"
                onClick={() => setOpenGameSetting(true)}
              />
              <SettingButton
                Icon={UserList}
                content="Add Players"
                onClick={() => setOpenAddPlayer(true)}
              />
            </div>
            <div className="flex w-full gap-2 text-[10px] text-white">
              <SettingChip content="DARE" />
              <SettingChip content="PG" />
            </div>
            <div className="w-full text-[18px] text-white">
              Post your favorite photo on your phone
            </div>
            <RerollButton />
          </div>
        </div>
      </div>
    </>
  );
}
