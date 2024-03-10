import TrainingDesc from "@/components/TrainingDesc";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full  h-[90vh] relative overflow-hidden">
        <Image
          src="/training.webp"
          height={1000}
          width={1000}
          className="object-cover object-center w-full h-[100%] z-0 absolute"
        />
        <h1 className="absolute text-white text-[11vw] z-9 top-[71%] font-bold left-[25%] ">
          TRAINING
        </h1>
      </div>
      <div className="bg-[#EBE9E9]">
        <div className="w-full mt-[-1vw] flex justify-center flex-col  items-center py-10 ">
          <p className="text-[2vw] font-semibold w-[60%] text-center leading-[2.2vw] tracking-tighter  ">
            Our certified personal trainers create the perfect programs to help
            you reach your goals, designed 100% around you.
          </p>
          <div className="border-[#00FB00] border-b-2 w-[90%] mt-8 "></div>
        </div>
        <TrainingDesc />
      </div>
    </>
  );
};

export default page;
