"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text =
    "100% Refund Guarantee if you don't ❤️ the product. Shop with Confidence.";
  return (
    <div>
      <header className="h-8 bg-[#242F65] text-white py-2">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(${windowWidth}px);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .scrolling-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll ${windowWidth / 100}s linear infinite;
          }
        `}</style>
        <div className="scrolling-text text-sm">{text}</div>
      </header>
    </div>
  );
}

export default Header;
