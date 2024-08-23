"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import SideFilter from "@/components/SideFilter";

// category to heading mapping
const categoryHeadings = {
  "Men Oversized T Shirts": "Oversized T-Shirts Collection",
  "Pick Printed T Shirts": "Printed T-Shirts Collection",
  "Best Selling Co Ord Sets": "Co-Ord Sets Collection",
  "Fashion Joggers Men": "Men's Joggers Collection",
  "Mens Shorts Collection": "Men's Shorts Collection",
  "Plus Size T Shirts": "Plus Size T-Shirts Collection",
};

function CategoryPage({ params }) {
  const [products, setProducts] = useState([]);

  const { category } = params;

  // Decode the category value
  const decodedCategory = decodeURIComponent(category).trim();

  // Getting the custom heading based on the category
  const heading = categoryHeadings[decodedCategory] || "Products";

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("Fetching products for category:", category);
        console.log(decodedCategory);
        const res = await fetch(
          `http://127.0.0.1:8000/api/products/?category=${category}`
        );
        console.log(
          "Fetch URL:",
          `http://127.0.0.1:8000/api/products/?category=${category}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched products:", data); // Debugging line
          setProducts(data);
        } else {
          console.error(
            "Failed to fetch products:",
            res.status,
            res.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [category]);
  return (
    <div>
      <Header />
      <Navbar />
      {/* banner */}
      <div className="banner">
        <Image
          src="https://nobero.com/cdn/shop/files/Collection_Page_Banners_44_aa5bfa74-25bf-4050-80ab-c86e702cc635_2.webp?v=1717997913"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
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
          <span className=" text-[#979797]">{heading}</span>
        </h1>
      </div>
      <div className="big-heading container mb-5">
        <h1 className="text-[#1A1E31] text-2xl">{heading}</h1>
      </div>
      <div className="divider container">
        <div className="filter flex">
          {/* sidebar */}
          <SideFilter className="basis-1/4" />
          {/* products */}
          <div className="prod basis-3/4 flex flex-wrap gap-4 ml-10 mb-20">
            {products.length > 0 ? (
              products.map((product) => (
                <div>
                  <div key={product.id}>
                    <div className="relative w-60 h-80">
                      <Image
                        src={product.image_url}
                        layout="fill"
                        objectFit="contain" // or use "contain" depending on your needs
                        alt={product.title}
                      />
                    </div>
                    <h1>{product.title}</h1>
                    <div className="prices flex space-x-2">
                      <h1>{product.price}</h1>
                      <h1 className=" line-through text-[#818181]">
                        {product.mrp}
                      </h1>
                    </div>
                    <h1 className="text-green-700">
                      Lowest price in last 30 days
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
