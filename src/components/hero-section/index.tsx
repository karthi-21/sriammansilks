"use client";
import Image from "next/image";
import logo from "@/app/icon.png";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";

const HeroSection = () => {
  const background: BannerLayer = {
    image: "/hero-section/big-temple.avif",
    translateY: [0, -10],
    opacity: [0.6, 0.5],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [-10, 0],
    scale: [1.2, 1.2, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        key={"text-layer"}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <div className="w-40 h-40 md:w-60 md:h-60 relative drop-shadow-2xl">
          <Image
            src={logo}
            alt="sriammansilks logo"
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            priority
          />
        </div>
        <h1 className="-mt-10 md:-mt-20 text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] text-white font-bold text-center text-shadow-glow-primary">
          Sri Amman Silks
          <br /> and Traders
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    // image: "/hero-section/modal.png",
    // translateY: [14, 1],
    // scale: [0.6, 0.6, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[72rem] 2xl:h-[40rem] top-[30rem] left-24 md:top-[34rem] md:left-[12rem] lg:top-[44rem] lg:left-72 xl:top-[30rem] xl:left-14 2xl:top-[24rem] 2xl:left-[50rem] 3xl:top-[48rem] 3xl:left-[20rem] relative drop-shadow-2xl">
        <Image
          src={"/hero-section/modal.png"}
          alt="sriammansilks logo"
          fill
          className="object-cover object-left-top absolute h-full w-full inset-0"
          priority
        />
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        key={"gradient-layer"}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-primary"
      />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, foreground, headline, gradientOverlay]}
      className="aspect-[0.45/1] md:aspect-[0.75/1] 2xl:aspect-[1.95/1] xl:aspect-[1.3/1] 3xl:aspect-[1.8/1] bg-[#7b5225]"
    />
  );
};

export default HeroSection;
