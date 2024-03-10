import Image from "next/image";
import React from "react";
import Why from "./Why";

const PersonalTraining = () => {
  const line = ["EXPERT", "PERSONAL", "TRAINING"];
  return (
    <>
      <div className="w-full min-h-[65vh]  flex py-5 ">
        <div className="left h-full w-[50%] px-2 py-[4vw] flex items-center justify-center flex-col">
          <div className="flex flex-col w-[50%]">
            {line.map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-[4.1vw] font-bold text-black leading-[4.6vw]"
                >
                  {item}
                </h1>
              );
            })}
            <div className="w-[150%] py-8">
              <p className="text-[1.2vw] text-extrabold">
                FITNESS nGO Gyms has the best personal training program in the
                Port Saint Lucie area. Our certified personal trainers are
                experts in their craft. We create the perfect programs to help
                you reach your goals. Everything begins with our energy and
                figuring out how to evolve that, then the journey begins.{" "}
              </p>
            </div>
            <button className="w-full font-bold bg-[#00FB00] rounded-md px-[1vw] py-4 tracking-tight transition duration-200 hover:bg-zinc-900 hover:text-white">
              FREE PERSONAL TRAINING COUPON
            </button>
          </div>
        </div>
        <div className="right w-[32%] px-2 py-[4.5vw] h-[80vh]  ">
          <Image
            src="/trainer.webp"
            height={900}
            width={900}
            className="h-[70vh] w-full object-fill object-center   "
          />
        </div>
      </div>
      <Why />
    </>
  );
};

export default PersonalTraining;
