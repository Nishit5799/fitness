import React from "react";
import Image from "next/image";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

const page = () => {
  const headings = [
    "MEMBERSHIP OPTIONS",
    "STARTING AT ₹800 MONTHLY",
    "NO CONTRACTS",
    "100% MONEY BACK GUARANTEE",
  ];
  return (
    <>
      <div className="w-full  relative z-[1] ">
        <div className="h-[30vw] overflow-hidden ">
          <Image
            src="/facilities.webp"
            height={10000}
            width={10000}
            className=" h-full object-cover absolute object-center w-full brightness-50"
          />
          <div className="flex relative text-white z-10 mt-[6.3vw] flex-col justify-center gap-2 items-center">
            {headings.map((item, index) => {
              return (
                <div className="font-bold text-[3.7vw]" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Join />
      <Footer />
    </>
  );
};

export default page;
