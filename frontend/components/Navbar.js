"use client";
import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";

function Navbar() {
  return (
    <div className="border-b-[1px] pb-7 pt-2">
      {/* container nav bar */}
      <div className=" container flex pt-3 justify-between">
        {/* logo */}
        <div className="logo pt-2 cursor-pointer">
          <Image src="/Nobero_logo_1_2.svg" alt="logo" width={50} height={60} />
        </div>
        {/* nav items */}
        <div className="nav-items flex flex-row grow justify-around pt-2 mx-10">
          <h1 className=" text-lg font-semibold cursor-pointer">Men</h1>
          <h1 className=" text-lg font-semibold cursor-pointer">Women</h1>
          <h1 className=" text-lg font-semibold cursor-pointer">
            Classic T-Shirts
          </h1>
          <h1 className=" text-lg font-semibold cursor-pointer">
            Oversized T-Shirts
          </h1>
          <h1 className=" text-lg font-semibold cursor-pointer">
            Fashion Joggers
          </h1>
          <h1 className=" text-lg font-semibold cursor-pointer">Hoodies</h1>
        </div>
        {/* extra elements */}
        <div className="extra flex justify-around">
          <div className="search flex border-[1px] px-2 border-[#DDDDDD] w-48 pt-1 mt-1 mx-3">
            <div className="search-icon mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            <Input
              placeholder="Search..."
              className=" border-0 focus-visible:ring-0 h-8  "
            />
          </div>
          <div className="profile mx-3 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round stroke-[#242F66]"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </div>
          <div className="cart mx-3 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-basket stroke-[#242F66]"
            >
              <path d="m15 11-1 9" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
              <path d="M4.5 15.5h15" />
              <path d="m5 11 4-7" />
              <path d="m9 11 1 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
