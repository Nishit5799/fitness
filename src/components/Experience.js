import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="left w-[50%]  flex flex-col py-[6vw] ml-10">
          <div className=" w-full flex justify-center">
            <Image src="/img1.webp" height={500} width={630} />
          </div>
          <div className="w-full flex justify-center flex-col   py-5 ">
            <h1 className="w-[45%] text-center font-bold ml-[10vw] mt-[2vw] text-[4.2vw] leading-none">
              THE. BEST. RECOVERY.
            </h1>
            <p className="w-[65%] text-[1.2vw] mt-4 ml-[10.5vw] leading-7 ">
              Our ultimate tier membership gives you the best recovery equipment
              in Port Saint Lucie. The hydromassage and Cryo chairs alone are
              worth the becoming a member.{" "}
            </p>
          </div>
          <div className=" w-[100%]">
            <div className="flex relative   items-center justify-end ">
              <Image src="/img31.webp" height={300} width={300} />
              <Image
                src="/img32.webp"
                height={300}
                width={300}
                className="mt-[9vw]"
              />
            </div>
            <div className="mt-[5vw] ">
              <h1 className="  font-bold ml-[8vw]  mt-[2vw] text-[4.2vw] leading-none">
                ATMOSPHERE
              </h1>
              <p className=" text-[1.2vw] mt-4 ml-[8vw]  leading-7 ">
                Our members tell us that they love our gym and the competitive
                atmosphere to be better. We are a gym for people that are
                serious about their health and fitness. Our gym is almost at
                capacity for monthly members because we want to make sure we
                don't get overcrowded.
              </p>
              <div className="w-full text-center">
                <Link href="/pages/join">
                  <button className=" w-[50%] px-10 py-5 mt-10 rounded-lg transition duration-300 hover:bg-black hover:text-white font-bold bg-[#00FB00]">
                    Start Your Journey
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col justify-between  mt-10  items-center w-[50%] ">
          <div className=" mt-10">
            <div className="flex w-[75%] font-bold gap-4   items-center justify-center">
              <h1 className="text-[4.1vw]">The</h1>
              <Image src="/whyimg.webp" height={70} width={80} />
              <h1 className="text-[4.1vw]">Experience</h1>
            </div>
            <div className="w-[85%]">
              <p className="text-[1.2vw]">
                Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the
                latest and greatest cardio and strength training equipment
                available, exciting nGo classes, Personal Training, Tanning,
                Cryo-Therapy, Hydromassage, Kids Club, and the greatest
                atmosphere in the city.
              </p>
            </div>
          </div>
          <div className=" mr-[8vw] ">
            <Image src="/img5.webp" height={500} width={550} className="" />
          </div>
          <div className=" w-[90%]  h-[10vw] tracking-tight">
            <h1 className="font-bold mr-[8vw] mb-6   text-[4.2vw] leading-none">
              TURF ZONE
            </h1>
            <p className=" text-[1.2vw] w-[60%] mr-[8vw]  leading-7">
              The perfect place to knock out those athletic workouts, take
              content, and use the TANK.
            </p>
          </div>
          <div className=" mr-[8vw] bg-green-500">
            <Image src="/img6.webp" height={500} width={550} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Experience;
