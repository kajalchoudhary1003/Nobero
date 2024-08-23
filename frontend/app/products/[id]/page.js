import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
async function fetchProductById(id) {
  const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const product = await res.json();
  return product;
}

export default async function ProductDetail({ params }) {
  const { id } = params;

  try {
    const product = await fetchProductById(id);

    return (
      <div>
        <Header />
        <Navbar />
        <div className="nav pl-32">
          <div className="home container mt-3 mb-6">
            <h1 className="flex">
              <span className=" text-base text-[#1A1E31] ">Home</span>
              <span className="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                  className=" stroke-[#979797]"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
              <span className=" text-[#979797]">{product.title}</span>
            </h1>
          </div>
        </div>
        <div className="product-detail container flex pl-32 pr-32 ">
          <div className="image">
            <Image
              src={product.image_url}
              width={500}
              height={700}
              alt={product.title}
            />
          </div>
          <div className="details grow pl-12">
            {/* title */}
            <div className="title flex justify-between">
              <h1 className="text-2xl font-semibold">{product.title}</h1>
              {/* share icon */}
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
                class="lucide lucide-share-2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            </div>
            {/* price */}
            <h1 className="text-3xl font-medium my-2">{product.price}</h1>
            {/* mrp */}
            <h1 className="text-[#898989]">
              MRP: <span className="line-through">{product.mrp}</span> Inclusive
              of all Taxes
            </h1>
            {/* cart */}
            <div className="cart flex space-x-2 py-2">
              {/* cart icon */}
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
                class="lucide lucide-shopping-cart"
                className="stroke-red-700"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <h1 className="text-red-700 font-semibold">
                <span>{product.last_7_day_sale}</span> people bought this in
                last 7 days
              </h1>
            </div>
            {/* offer */}
            <div className="flex space-x-2">
              <div className="first bg-[#FAF6E8] border-[1px] border-[#D6B96B] flex space-x-2 p-2 rounded-lg ">
                <div className="icon mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6B96B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-badge-percent"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m15 9-6 6" />
                    <path d="M9 9h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                </div>
                <div className="info flex-col">
                  <h1 className="text-[#715D0B] font-medium">
                    Pick Any 2 Tees at ₹999
                  </h1>
                  <h1 className="text-[#979797] text-sm">
                    No Code Required. Hurry!
                  </h1>
                </div>
              </div>
              <div className="second bg-[#FAF6E8] border-[1px] border-[#D6B96B] flex space-x-2 p-2 rounded-lg ">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6B96B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-badge-percent"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m15 9-6 6" />
                    <path d="M9 9h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                </div>
                <div className="info flex-col">
                  <h1 className="text-[#715D0B] font-medium">
                    Flat ₹250 OFF Use Code:WK250
                  </h1>
                  <h1 className="text-[#979797] text-sm">
                    On min. purchase of ₹1500. Weekend Only!{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* sale */}
            <div className="bg-[#B0FFC9] my-2 p-2 text-center">
              <h1 className="text-indigo-800">
                Sale ends in : 02h : 14m : 27s
              </h1>
            </div>
            {/* select size */}
            <div className="size">
              <h1 className="text-[#242F66] text-lg font-medium my-2">
                {" "}
                Select Size
              </h1>
              <div className="select text-[#242F66] flex justify-between">
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  S
                </div>
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  M
                </div>
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  L
                </div>
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  XL
                </div>
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  XXL
                </div>
                <div className=" py-2 border-[1px] border-slate-400 px-8 rounded-full">
                  XXXL
                </div>
              </div>
            </div>
            {/* lowest price */}

            <div className="bg-[#F0E4B6] my-4 p-2 text-center">
              <h1 className="text-indigo-800">Lowest price in last 30 days</h1>
            </div>
            {/* add to cart */}
            <div className="add-to-cart">
              <button className="bg-[#242F66] text-white py-3 rounded-full w-full text-xl font-semibold">
                Add to Cart
              </button>
            </div>

            {/* key highlights */}
            <div className="my-5 pl-3">
              <h1 className="text-2xl font-medium text-[#242F66]">
                Key Highlights
              </h1>
              <div className="flex mt-10 space-x-4">
                <div className=" basis-1/2 flex-col">
                  <div>
                    <h1 className="text-slate-500">Fit</h1>
                    <h2>{product.fit}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                  <div>
                    <h1 className="text-slate-500">Neck</h1>
                    <h2>{product.neck}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                  <div>
                    <h1 className="text-slate-500">Pattern</h1>
                    <h2>{product.pattern}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                </div>
                <div className="basis-1/2 flex-col">
                  <div>
                    <h1 className="text-slate-500">Fabric</h1>
                    <h2>{product.fabric}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                  <div>
                    <h1 className="text-slate-500">Sleeve</h1>
                    <h2>{product.sleeve}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                  <div>
                    <h1 className="text-slate-500">Length</h1>
                    <h2>{product.length}</h2>
                    <div className="bg-slate-300 h-[1px] mt-2 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Failed to load product details</div>;
  }
}
