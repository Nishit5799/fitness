import React from "react";

import Image from "next/image";
import GalleryImage from "@/components/GalleryImage";
import Footer from "@/components/Footer";

const Page = () => {
  const images = [
    "/gym3.jpg",
    "/gym2.jpg",
    "/gym1.jpg",
    "/gym4.jpg",
    "/gym5.jpg",
  ];

  return (
    <>
      <div className="min-h-screen w-full ">
        <div className=" w-full relative overflow-hidden ">
          <div className="absolute w-full -z-10">
            <Image
              src="/gallery.webp"
              height={10000}
              width={10000}
              className="w-full object-cover object-center"
            />
          </div>
          <div className="relative flex items-center justify-center mt-[7vw] gap-2 text-white z-[1] ">
            <h1 className="text-[3.5vw] font-bold">FITNESS</h1>
            <Image
              src="/whyimg.webp"
              height={300}
              width={300}
              className="w-[5.9vw]"
            />
          </div>
          <div className=" relative w-fit flex overflow-hidden   z-[2] px-10  mt-10 ">
            <GalleryImage images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
