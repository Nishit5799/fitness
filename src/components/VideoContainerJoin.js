import React from "react";
import PersonalTraining from "./PersonalTraining";
import Link from "next/link";

const VideoContainerJoin = () => {
  return (
    <>
      <div className="w-full h-[36%] bg-[#000000] flex items-center justify-center flex-col leading-[3.2vw]">
        <h1 className="text-[4vw] font-bold text-white">LEAP YEAR SPECIAL</h1>
        <h1 className="text-[1.7vw] font-bold text-[#00FB00] ">
          JOIN NOW FOR A FREE MARCH
        </h1>
        <Link href="/pages/join">
          <button className="text-zinc-900 text-[1.1vw] bg-[#00FB00] px-12 font-bold rounded-md tracking-tighter hover:bg-zinc-900 transition duration-500  hover:text-white">
            CLICK HERE FOR FREE DAY PASS
          </button>
        </Link>
      </div>
      <PersonalTraining />
    </>
  );
};

export default VideoContainerJoin;
