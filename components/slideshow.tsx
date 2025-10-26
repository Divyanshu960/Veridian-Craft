"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/banners/1.png",
  "/banners/2.png",
  "/banners/3.png",
  "/banners/4.png",
  "/banners/5.png",
  "/banners/6.png",
  "/banners/7.png",
  "/banners/10.png",
  "/banners/8.png",
  "/banners/12.png",
  "/banners/9.png",
  "/banners/11.png",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-woodsmoke">
      {/* Gradient overlay to blend into blue on the right */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent to-woodsmoke"></div>

      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-contain object-center"
          />
        </div>
      ))}
    </div>
  );
}
