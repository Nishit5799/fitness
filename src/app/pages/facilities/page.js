import Facilities from "@/components/Facilities";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
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
          <div className="flex relative text-white z-10 mt-[10vw] flex-col justify-center gap-2 items-center">
            <h1 className="text-[3.2vw] font-bold">
              $2 Million-Dollars in Renovations!
            </h1>
            <p>
              Come in and experience the best gym in the Port Saint Lucie area.
            </p>
            <Link href="/pages/join">
              <button className="px-[10vw]  bg-[#00FB00] py-4 text-black font-bold rounded-lg transition duration-300 hover:bg-black hover:text-white">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Facilities />
    </>
  );
};

export default page;
