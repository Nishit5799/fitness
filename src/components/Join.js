import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Join = () => {
  const features = [
    "INCLUDED",
    "ANY DAY ACCESS",
    "BRING A GUEST FREE*",
    "3 TRAINING SESSIONS",
    "3 GROUP SESSIONS",
    "HEALTHY WORKSHOPS",
    "MONTHLY INBODY REPORTS",
    "UNLIMITED FITNESS EQUIPMENT USE",
    "EXECUTIVE LOCKER ROOM",
    "UNLIMITED DRY SAUNA",
    "UNLIMITED TANNING",
    "KIDS CLUB - FIRST CHILD FREE",
    "UNLIMITED CRYO-THERAPY",
    "UNLIMITED HYDRO-MASSAGE",
    "UNLIMITED MASSAGE CHAIR",
  ];

  const check = [
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
  ];
  const check2 = [
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,
    <FaCheck className="text-[#00FB00]" />,

    <RxCross1 />,
    <RxCross1 />,
    <RxCross1 />,
    <RxCross1 />,
    <RxCross1 />,
  ];
  return (
    <div className="bg-gradient-to-r from-zinc-100 to-zinc-300 min-h-screen w-full py-9">
      <div className="flex  items-center gap-10  ">
        <div className="left py-10 rounded-lg mt-10 ml-[9vw] w-[38%] flex flex-col bg-black   text-white">
          <div className="flex font-bold items-center justify-start w-[78%] m-auto  gap-4  py-6  ">
            <h1 className="text-[3.6vw]">ULTIMATE</h1>
            <Image src="/whyimg.webp" height={1000} width={70} />
          </div>
          <div className="flex gap-[7vw] items-center ml-[4.9vw]">
            <div className=" flex  gap-10 flex-col ">
              {features.map((item, index) => {
                return (
                  <div
                    className={`${
                      index === 0 ? "text-[#00FB00]" : "text-white"
                    } text-[1.1vw] font-bold `}
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex   gap-[1.89vw] flex-col">
              {check.map((item, index) => {
                return (
                  <div className=" text-[2.2vw] " key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right  py-10 rounded-lg mt-10 mr-[9vw] w-[38%] flex flex-col bg-black   text-white">
          <div className="flex font-bold items-center justify-start w-[78%] m-auto  gap-4  py-6  ">
            <h1 className="text-[3.6vw]">365</h1>
            <Image src="/whyimg.webp" height={1000} width={70} />
          </div>
          <div className="flex gap-[7vw] items-center ml-[4.9vw]">
            <div className=" flex  gap-10 flex-col ">
              {features.map((item, index) => {
                return (
                  <div
                    className={`${
                      index === 0 ? "text-[#00FB00]" : "text-white"
                    } text-[1.1vw] font-bold `}
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex   gap-[1.89vw] flex-col">
              {check2.map((item, index) => {
                return (
                  <div className=" text-[2.2vw] " key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-2 items-center  m-auto  mt-5">
        <p className="text-[1.1vw] font-semibold italic">
          Weekend Only membership not shown -- Minimum age to become a member is
          16 years.
        </p>
        <h1 className="text-[1.5vw] font-bold">
          {" "}
          Click below to schedule your gym tour. We will respond promptly.{" "}
        </h1>
        <button className="font-bold rounded-lg w-[55%] px-10 py-3 bg-black text-white hover:bg-[#00FB00] transition duration-300">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Join;
