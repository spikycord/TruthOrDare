import Head from "next/head";
import { DiceSix, Gear, UserList } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Truth or Dare</title>
        <meta name="description" content="Truth Or Dare App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[100vh] w-[100vw] justify-center bg-[#030712]">
        <div className="flex h-full w-[600px] flex-col items-center justify-center gap-4">
          <div className="text-4xl font-semibold text-white">Truth or Dare</div>
          <div className="flex gap-2 text-sm text-white">
            <div className="rounded-lg border border-slate-700 bg-black px-2 py-1 text-white hover:bg-slate-800">
              <div className="flex flex-row items-center gap-1">
                <Gear size={18} color="#fafafa" weight="duotone" />
                <div>Game Settings</div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-black px-2 py-1 text-white hover:bg-slate-800">
              <div className="flex flex-row items-center gap-1">
                <UserList size={18} color="#fafafa" weight="duotone" />
                <div>Add Players</div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2 text-[10px] text-white">
            <div className="rounded-lg bg-[#7234d6] px-2 py-[2px] text-white hover:bg-[#6225c5]">
              DARE
            </div>
            <div className="rounded-lg bg-[#7234d6] px-2 py-[2px] text-white hover:bg-[#6225c5]">
              PG
            </div>
          </div>
          <div className="w-full text-[18px] text-white">
            Post your favorite photo on your phone
          </div>
          <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7234d6] py-2 text-sm text-white hover:bg-[#6225c5]">
            <DiceSix size={24} color="#fafafa" weight="duotone" />
            <div>Reroll Question</div>
          </div>
        </div>
      </div>
    </>
  );
}
