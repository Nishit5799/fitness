import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Link from "next/link";

const TraningDesc = () => {
  return (
    <>
      <div className="w-full h-[90vh]  flex">
        <div className="left w-[50%]  flex items-center justify-end">
          <Image
            src="/training1.webp"
            height={400}
            width={350}
            className="bg-blue-600"
          />
        </div>
        <div className="right w-[30%] flex flex-col   items-center">
          <div className="flex items-center mt-10">
            <h1 className="text-[3vw] font-bold">It's</h1>
            <Image src="/whyimg.webp" height={100} width={100} />
            <h1 className="text-[3vw] font-bold">Time.</h1>
          </div>
          <div className="w-[100%] mt-6">
            <p className="ml-[4vw]">
              Here at FITNESS nGO, we focus on bringing you the most powerful
              workouts to meet your needs: our toolbox includes weighted battle
              ropes, kettlebells, TRX® suspension straps, Turf Zone, Med Balls,
              and the list goes on.
            </p>
          </div>
          <div className="w-[100%] mt-6">
            <p className="ml-[4vw]">
              It may sound like a lot, but this world-class functional training
              equipment helps our trainers provide you with an array of High
              Intensity Interval Training (HIIT) workouts.
            </p>
          </div>
          <div className="w-[100%] mt-6">
            <p className="ml-[4vw]">
              Our FITNESS nGO locations offer PowerPlate, an all-encompassing
              fitness program that includes revolutionary vibration technology.
              Come check it out for yourself!
            </p>
          </div>
          <Link href="/">
            <button className=" mt-6 px-16 rounded-lg font-semibold transition duration-300  py-4 bg-[#00FB00] hover:bg-zinc-900 hover:text-white">
              Sign Up For Personal Training
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TraningDesc;
