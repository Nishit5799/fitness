"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import NavbarList from "./NavbarList";
import Link from "next/link";
import FreePass from "./FreePass";

const Navbar = () => {
  const [freePass, setFreePass] = useState(false);

  const navElems = [
    <Link href="/">Home</Link>,
    <Link href="/pages/training">Training</Link>,
    <Link href="/pages/facilities">Facilities</Link>,
    <Link href="/pages/join">Join</Link>,
    <Link href="/pages/gallery">Gallery</Link>,
    <Link href="/pages/about">About</Link>,
  ];

  const icons = [<AiFillInstagram />, <FaTwitter />, <FaFacebookF />];

  const button = [<Link href="/pages/join">Join Now</Link>, "Free Pass"];

  return (
    <div className="w-full h-[100px] flex px-[3vw] py-0 fixed bg-white z-[10]">
      <div className="w-[17%] h-full flex items-center justify-center">
        <Image src="/logo.webp" height={80} width={600} />
      </div>
      <NavbarList
        elem={navElems}
        setFreePass={setFreePass} // Pass the state directly
        icons={icons}
        button={button}
      />
      {freePass && <FreePass />}
    </div>
  );
};

export default Navbar;
