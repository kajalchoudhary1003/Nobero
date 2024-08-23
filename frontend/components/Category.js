import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Category() {
    const router = useRouter();
    const handleCategoryClick = (category) => {
        router.push(`/${category}`);
      };
  return (
    <div>
      <div className="container flex flex-row justify-around px-6">
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md ml-14 " onClick={() => handleCategoryClick("Men Oversized T Shirts ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/t-shirts_68004d61-294b-4156-967b-0a5a8638d3f1.jpg?v=1719231626"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md" onClick={() => handleCategoryClick("Pick Printed T Shirts ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/2_4.png?v=1719231678"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md" onClick={() => handleCategoryClick("Best Selling Co Ord Sets ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/8_22a87a7c-82fa-446e-93e1-af1f0f742eef.png?v=1697452265"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md" onClick={() => handleCategoryClick("Fashion Joggers Men ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/9_74d1b95d-04db-4358-8406-05a744e0fd65.png?v=1697452265"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md" onClick={() => handleCategoryClick("Mens Shorts Collection ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/10_ba94e30c-4d53-4814-9c8a-5bc14d131d6b.png?v=1697452265"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
        <div className="px-1 cursor-pointer pt-1 pb-6 border-[1px] border-[#DDDDDD] rounded-md mr-14" onClick={() => handleCategoryClick("Plus Size T Shirts ")}>
          <Image
            src="https://nobero.com/cdn/shop/files/SHOP_WOMEN_MEN_MOBILE_Vers._1.jpg?v=1716790197"
            alt="pic"
            height={140}
            width={180}
            className=" rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
