import { BentoGridThirdDemo } from "@/components/bento-grid";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/header/floating-navbar";
import Navbar from "@/components/header/navbar";
import { ImagesSliderSection } from "@/components/image-slider";
import { ParallaxSection } from "@/components/parallax-section";
import { HomeIcon, AvatarIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <AvatarIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <ChatBubbleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between gap-24">
      {/* <Navbar /> */}
      <FloatingNav navItems={navItems} />
      <ParallaxSection />
      <BentoGridThirdDemo />
      <Footer />
    </main>
  );
}
