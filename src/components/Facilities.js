import Image from "next/image";
import React from "react";
import Footer from "./Footer";

const Facilities = () => {
  return (
    <>
      <div className=" w-full min-h-screen flex py-[7vw]">
        <div className="left h-full  w-[50%] gap-[25vw]  flex flex-col  items-center justify-between">
          <div className="w-full px-[3vw] ml-[15vw]   text-black ">
            <h1 className=" w-[50%] text-[2vw] tracking-tight font-bold mb-10 ">
              Training Floor
            </h1>
            <p className="w-[88%] text-[1.2vw]">
              Our fully renovated 25,000 sq.ft. gym provides you all the space
              you need to enjoy your pursuit of a healthier and happier you! We
              offer all the brand names from: MATRIX, NAUTILUS, HAMMER,
              STAIRMASTER, LIFE FITNESS, TORQUE, and more.{" "}
            </p>
          </div>

          <div className="w-[90%] flex justify-end   ">
            <Image
              src="/fac1.webp"
              height={1000}
              width={1000}
              className="object-fill w-[80%] object-center"
            />
          </div>

          <div className="w-full px-[3vw] ml-[15vw] -mt-[8vw]  text-black ">
            <h1 className=" w-[50%] text-[2vw] tracking-tight font-bold mb-10 ">
              Strength
            </h1>
            <p className="w-[88%] text-[1.2vw]">
              Find everything you need to sculpt, tone, firm, and add metabolic
              boosting muscle to your body. Literally tons of free-weights,
              plate-loaded, and selectorized machines available. No muscle group
              will go underworked.{" "}
            </p>
          </div>

          <div className="w-[80%] flex justify-end ">
            <Image
              src="/fac3.webp"
              height={1000}
              width={1000}
              className="object-fill w-[85%] object-center"
            />
          </div>

          <div className="w-full px-[3vw] ml-[15vw]  -mt-[8vw] text-black  ">
            <h1 className=" w-[50%] text-[2vw] tracking-tight font-bold mb-10 ">
              Recovery
            </h1>
            <p className="w-[88%] text-[1.2vw]">
              Our ultimate tier membership gives you the best recovery equipment
              in Port Saint Lucie. The hydromassage and Cryo chairs alone are
              worth the membership.{" "}
            </p>
          </div>
        </div>
        <div className="right flex flex-col gap-[25vw]  h-full  justify-between w-[50%] ">
          <div className="w-[70%] ml-[3vw] ">
            <Image src="/fac4.webp" height={1000} width={1000} />
          </div>
          <div className="w-full px-[3vw] -mt-[13.8vw]  text-black  ">
            <h1 className=" w-[50%] text-[2vw] tracking-tight font-bold mb-10 ">
              Cardio
            </h1>
            <p className="w-[88%] text-[1.2vw]">
              Get your heart and lungs working with our brand new cardio. All of
              them have personal fans to keep you cool and dozens of 72" 4k
              televisions for your entertainment. We have them all: Treadmills,
              stairmills, upright/recumbent/spin bikes, rowers, ellipticals.{" "}
            </p>
          </div>
          <div className="w-[70%] ml-[3vw] mt-[8vw]">
            <Image src="/fac5.webp" height={1000} width={1000} />
          </div>
          <div className="w-full px-[3vw] -mt-[15vw]  text-black  ">
            <h1 className=" w-[50%] text-[2vw] tracking-tight font-bold mb-10 ">
              Turf Training Zone
            </h1>
            <p className="w-[88%] text-[1.2vw]">
              Large zone dedicated to training like an athlete. Complete with
              all the functional and cross training equipment and accessories.
              Push your way to stronger glutes with the latest sled from TORQUE!{" "}
            </p>
          </div>
          <div className="w-[70%] ml-[3vw] mt-[7vw]">
            <Image src="/fac6.webp" height={1000} width={1000} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Facilities;
