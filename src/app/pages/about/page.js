import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const page = () => {
  const heading = [
    "Welcome",
    "to",
    "the",
    <Image src="/whyimg.webp" height={150} width={100} />,
    "Experience",
  ];
  return (
    <>
      <div className="w-full flex flex-col h-screen ">
        <div className="w-full h-[40%] py-[11vw]  bg-black text-white">
          <div className="m-auto  w-[60%]">
            <div className="flex  justify-center gap-2 text-[4vw] font-bold">
              {heading.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex ">
          <div className="w-[50%] ">
            <Image src="/about.webp" height={200} width={1000} />
          </div>
          <div className="flex justify-end gap-5 flex-col w-[50%] px-[5vw] ">
            <h1 className="text-[2vw] font-bold tracking-tight">
              Our Mission & Concept
            </h1>
            <p className="w-[95%] text-[1.17vw]">
              {" "}
              Our concept is simple. Provide our local communities with the most
              motivating fitness environment possible. As a valued member, you
              will receive the cleanest facilities with the friendliest staff
              guaranteed. No matter your gym experience or level of fitness, you
              will find our atmosphere welcoming and inspiring. Our mission is
              to ultimately help you achieve your end goal.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </>
  );
};

export default page;
