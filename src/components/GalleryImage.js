"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const GalleryImage = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <>
      <div className="gap-[9vw]  hover:scale-[0.95] w-fit  flex duration-700 transition-transform">
        {images.map((item, index) => (
          <Image
            key={index}
            src={item}
            height={200}
            width={1000}
            className={` hover:brightness-50 duration-500 transform scale-100 ${
              index === currentImage ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          />
        ))}
      </div>
      <div
        className="rightArrow w-full cursor-pointer absolute left-[93vw] top-[23vw]"
        onClick={nextImage}
        value={currentImage}
      >
        <FaArrowRight className="text-[4vw] px-[1.1vw] rounded-lg bg-[#00FB00]" />
      </div>
    </>
  );
};

export default GalleryImage;
