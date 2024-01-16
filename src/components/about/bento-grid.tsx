import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  AlignRightIcon,
  AlignTopIcon,
  ArrowRightIcon,
  BoxIcon,
  CopyIcon,
  FileIcon,
  FontStyleIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function BentoGridSection() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 ? "md:col-span-2" : i === 5 ? "md:col-span-3" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Header = ({ imgSrc }: any) => (
  <div className="flex flex-1 w-full relative h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {imgSrc && (
      <Image
        src={imgSrc}
        fill
        alt="img-alt-txt"
        className="object-cover object-left-top absolute rounded-xl h-full w-full inset-0"
      />
    )}
  </div>
);
const items = [
  {
    title: "Vivegam by Ramraj",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Header imgSrc="/brand/ramraj.webp" />,
    icon: <CopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Rixo",
    description: "Dive into the transformative power of technology.",
    header: <Header imgSrc="/brand/rixo.jpeg" />,
    icon: <FileIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Poomer",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Header imgSrc="/brand/poomer.png" />,
    icon: <FontStyleIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Presta",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Header imgSrc="/brand/presta.png" />,
    icon: <TableIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jockey",
    description: "Join the quest for understanding and enlightenment.",
    header: <Header imgSrc="/brand/jockey.jpeg" />,
    icon: <ArrowRightIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Poomex",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Header imgSrc="/brand/poomex.png" />,
    icon: <TableIcon className="h-4 w-4 text-neutral-500" />,
  },
];
