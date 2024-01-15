"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function ParallaxSection() {
  return <HeroParallax products={products} />;
}
export const products: Array<{ title: string; thumbnail: string }> = [
  {
    title: "Silk Cloth",
    thumbnail:
      "https://images.unsplash.com/photo-1517472292914-9570a594783b?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pattu Saree",
    thumbnail:
      "https://images.unsplash.com/photo-1616669181995-9b867456f33b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pattu Saree",
    thumbnail:
      "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "photoshoot",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1682096159299-5e8a6d5d442b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shirt Hangers",
    thumbnail:
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "showcase",
    thumbnail:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "showcase-2",
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "shirts",
    thumbnail:
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "bi-jama",
    thumbnail:
      "https://images.pexels.com/photos/7686324/pexels-photo-7686324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "jama",
    thumbnail:
      "https://images.pexels.com/photos/8819336/pexels-photo-8819336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Wedding party",
    thumbnail:
      "https://images.pexels.com/photos/9392445/pexels-photo-9392445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
  // { title: "", thumbnail: "" },
];
