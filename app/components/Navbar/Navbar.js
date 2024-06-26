"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/assets/whiteLogo.png";
import Link from "next/link";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineClose, MdArrowDropDown } from "react-icons/md";
import { CustomButton } from "@/app/core";

const Navbar = () => {
  let [isactive, setIsActive] = useState(true);
  let [isnav, setIsNav] = useState(false);
  let handleClick = () => {
    setIsActive(!isactive);
  };
  return (
    <nav
      className={`${
        isactive ? "shadow-md" : "h-dvh"
      } fixed w-full z-[9999] bg-body`}
    >
      <div className="container mx-auto py-3 px-2 flex justify-between items-center max-lg:relative">
        <Link href={"/"}>
          <Image
            priority={true}
            alt="synex logo"
            width={140}
            className="cursor-pointer"
            src={logo}
          />
        </Link>

        {isactive ? (
          <ul className="text-white lg:flex gap-x-14 items-center hidden">
            <li>
              <Link
                href={"/"}
                className="hover:text-primary ease-in-out duration-300"
              >
                Home<span></span>
              </Link>
            </li>
            <li id="dropdowndiv">
              <Link
                href={"/services"}
                className="hover:text-primary flex items-center"
              >
                Services
                <span></span>
                <MdArrowDropDown id="serviceicon" className="text-2xl" />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href={"/services/websitedevelopment"}>
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href={"/services/digitalmarketing"}>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href={"/services/mobileappdevelopment"}>
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href={"/services/uxuidesign"}>UI/UX Design</Link>
                </li>
                <li>
                  <Link href={"/services/graphicsdesign"}>Graphics Design</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="hover:text-primary ease-in-out duration-300"
              >
                Projects<span></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs"}
                className="hover:text-primary ease-in-out duration-300"
              >
                Blog<span></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/techpartner"}
                className="hover:text-primary ease-in-out duration-300"
              >
                Be a Tech Partner<span></span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="text-white lg:hidden absolute w-full top-0 h-screen pt-40 flex flex-col gap-y-7 bg-[#1d2934] text-center">
            <li>
              <Link href={"/"} onClick={() => setIsActive(!isactive)}>
                Home<span></span>
              </Link>
            </li>
            <li onClick={() => setIsNav(!isnav)}>
              Services<span></span>
              {isnav && (
                <ul className="flex flex-col gap-y-5 mt-5 text-primary">
                  <li>
                    <Link
                      onClick={() => setIsActive(!isactive)}
                      href={"/services/websitedevelopment"}
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsActive(!isactive)}
                      href={"/services/digitalmarketing"}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsActive(!isactive)}
                      href={"/services/mobileappdevelopment"}
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsActive(!isactive)}
                      href={"/services/uxuidesign"}
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsActive(!isactive)}
                      href={"/services/graphicsdesign"}
                    >
                      Graphics Design
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href={"/projects"} onClick={() => setIsActive(!isactive)}>
                Projects<span></span>
              </Link>
            </li>
            <li>
              <Link href={"/blogs"} onClick={() => setIsActive(!isactive)}>
                Blog<span></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/techpartner"}
                onClick={() => setIsActive(!isactive)}
              >
                Be a Tech Partner<span></span>
              </Link>
            </li>
          </ul>
        )}

        <CustomButton className="hidden lg:block" btnTitle="Let's Talk" href="#"/>

        <div id="backward" className="lg:hidden">
          {isactive ? (
            <HiMiniBars3CenterLeft
              onClick={handleClick}
              className="text-primary text-3xl cursor-pointer"
            />
          ) : (
            <MdOutlineClose
              onClick={handleClick}
              className="text-primary text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
