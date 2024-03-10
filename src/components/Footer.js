import Image from "next/image";
import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const services = ["Careers", "Customer Service", "Corporate Wellness"];
  const terms = ["Terms of use", "Privacy Policy", "FAQ"];
  const icons = [<AiFillInstagram />, <FaTwitter />, <FaFacebookF />];
  return (
    <div className="w-full  px-[10vw] py-[1vw]   ">
      <div className=" w-full flex justify-between py-[5vw]">
        <Image src="/footer.webp" height={400} width={300} />
        <div className="flex items-center gap-5">
          {icons.map((icon, index) => (
            <div className="  text-[3vw]  cursor-pointer " key={index}>
              {icon}
            </div>
          ))}
        </div>
      </div>
      <div className="font-semibold flex gap-10 underline cursor-pointer text-[1.2vw] mb-10">
        {terms.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div className="font-semibold flex gap-10 underline cursor-pointer text-[1.2vw] mb-10">
        {services.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div className="mb-[5vw]">
        <h1 className="text-[0.9vw] font-bold mb-5">© 2022-2024 FITNESS nGO</h1>
        <h1 className="mb-5">
          250 NW Peacock Blvd, Port Saint Lucie, Florida 34986
        </h1>
        <h1 className="underline">Hours of Operation </h1>
        <h1>Monday - Friday - 5:00 a.m - 11:00 p.m</h1>
        <h1>Saturday & Sunday - 7:00 a.m - 7:00 p.m</h1>
      </div>
    </div>
  );
};

export default Footer;
