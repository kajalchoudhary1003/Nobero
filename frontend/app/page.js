"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Category from "@/components/Category";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="shop-men">
        <h1 className="text-[#1A1E31] text-2xl text-center font-medium py-8">
          Shop Men
        </h1>
      </div>
      <Category />
    </div>
  );
}
