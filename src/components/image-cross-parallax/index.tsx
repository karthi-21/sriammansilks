"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TImage, chudidhars, sarees, shirts } from "./data";

const HeroParallax = () => {
  const firstRow = sarees;
  const secondRow = chudidhars;
  const thirdRow = shirts;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <section
      id="collections"
      ref={ref}
      className="h-[300vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="my-40 max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> collection
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Discover the Essence of Style and Quality at Our Textile Haven. Since
        2010, We&apos;ve Been Crafting a World of Trusted Brands and Authentic
        Fabrics. Experience the Blend of Tradition and Trend with Every Fabric
        Choice. Where Your Textile Dreams Meet Our Commitment to Excellence.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: TImage;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-52 relative flex-shrink-0"
    >
      {product?.link ? (
        <Link
          href={product.link}
          className="block group-hover/product:shadow-2xl "
        >
          <Image
            src={product?.url ?? "/" + product.assetPath}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product?.title ?? "image-alt"}
          />
        </Link>
      ) : (
        <div className="block group-hover/product:shadow-2xl ">
          <Image
            src={product?.url ?? "/" + product.assetPath}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product?.title ?? "image-alt"}
          />
        </div>
      )}

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      {/* <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};

export default HeroParallax;
