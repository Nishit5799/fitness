import Image from "next/image";
import React from "react";
import Experience from "./Experience";
import Link from "next/link";

const Why = () => {
  const features = [
    "Super Clean",
    "Friendly Staff",
    "Workout And Recover",
    "Motivating Atmosphere",
  ];
  return (
    <>
      <div className="w-full h-screen relative">
        <Image
          src="/why.webp"
          height={2000}
          width={2000}
          className="object-cover h-full w-full absolute z-0 brightness-50 "
        />
        <div className="flex relative ">
          <div className="z-9 w-[50%] py-[5.5vw] h-full flex flex-col ml-[10vw] items-center justify-center tracking-tighter">
            <div className="flex items-center  gap-6 h-full">
              <h1
                className="first text-[#00FB00] font-bold text-[6.5vw] "
                style={{ textShadow: "4px 4px  rgba(255,255,255,1)" }}
              >
                WHY
              </h1>
              <Image
                src="/whyimg.webp"
                height={10000}
                width={10000}
                className="h-[7vw] w-full mt-6    "
              />
              <h1
                className="first text-[#00FB00] font-bold text-[7.1vw] "
                style={{ textShadow: "4px 4px  rgba(255,255,255,1)" }}
              >
                ?
              </h1>
            </div>
            <p className="text-white w-[60%] font-bold  text-[1.2vw]">
              Luxury Gym Experience Everyone Can Afford.
            </p>
            <div className="  py-4 w-full leading-[5vw]">
              {features.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" w-full items-center justify-center ml-[5vw]  flex gap-5"
                  >
                    <div className="   flex flex-col items-center">
                      <Image src="/check.webp" height={60} width={60} />
                    </div>
                    <div className="w-[70%]">
                      <h1 className="text-white  font-bold text-[2.5vw]">
                        {item}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[85%]  flex justify-end mt-6 ">
              <Link href="/pages/join">
                <button className="text-black text-[1vw] font-bold hover:bg-zinc-900 hover:text-white transition duration-300   px-[11vw] rounded-md py-4 bg-[#00FB00] ">
                  Start Your Journey
                </button>
              </Link>
            </div>
          </div>
          <div className="z-9 w-[50%] flex items-center justify-center ">
            <Image src="/trainee.webp" height={450} width={400} />
          </div>
        </div>
      </div>
      <Experience />
    </>
  );
};

export default Why;
