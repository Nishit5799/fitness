import React, { useState, useEffect } from "react";
import FreePass from "./FreePass";
import Link from "next/link";

const NavbarList = ({ elem, icons, button, setFreePass }) => {
  const [active, setActive] = useState("");
  const [showFreePass, setShowFreePass] = useState(false);

  useEffect(() => {
    // Update the showFreePass state when setFreePass prop changes
    setShowFreePass(setFreePass);
  }, [setFreePass]);

  return (
    <div className="flex w-[100%] items-center px-3">
      <div className="flex gap-12 w-[75%] h-full items-center font-semibold">
        {elem.map((item, index) => (
          <div
            onClick={() => {
              setActive(item);
            }}
            className={`${
              active === item ? "text-green-500" : "text-zinc-900"
            } cursor-pointer transition duration-200 hover:text-green-500`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex gap-4 h-full w-[100%] justify-center items-center">
        {icons.map((icon, index) => (
          <div className="text-[1.3vw] cursor-pointer " key={index}>
            {icon}
          </div>
        ))}
      </div>
      <div className="flex w-[80%] h-full justify-center items-center gap-[50px]">
        {button.map((btn, index) => (
          <div
            key={index}
            className="font-semibold bg-[#00FB00] border outline-none cursor-pointer border-green-400 px-5 py-3 whitespace-nowrap transition duration-300 rounded-lg hover:bg-zinc-900 hover:text-white"
            onClick={() => {
              if (index === 1) {
                setShowFreePass(true);
              }
            }}
          >
            <Link href="/pages/join">{btn}</Link>
          </div>
        ))}
      </div>
      {showFreePass && <FreePass />}
    </div>
  );
};

export default NavbarList;
