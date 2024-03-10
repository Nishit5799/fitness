"use client";
import Image from "next/image";
import React, { useState } from "react";
import FormFreePass from "./FormFreePass";
import { RxCross1 } from "react-icons/rx";

const FreePass = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div
      className={`${
        disabled ? "block" : "hidden"
      } w-[35%] h-screen  right-0  bg-black py-4  top-0 fixed z-[11]`}
    >
      <div className=" relative h-screen">
        <div className="relative z-[13]  text-zinc-600 ">
          <Image
            src="/freepass1.webp"
            height={1000}
            width={1000}
            className="w-[60%] m-auto"
          />
          <RxCross1
            onClick={() => {
              setDisabled();
            }}
            className="cross text-white text-[3vw] absolute top-0 right-3 cursor-pointer"
          />
          <h1 className="text-[#00FB00] text-[1.1vw] w-full text-center m-auto">
            COMPLETE THIS FORM AND A MEMBERSHIP <br />
            ADVISOR WILL CONTACT YOU FOR YOU FREE DAY PASS
          </h1>
        </div>
        <FormFreePass />
      </div>
    </div>
  );
};

export default FreePass;
