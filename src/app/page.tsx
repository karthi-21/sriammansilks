import About from "@/components/about";
import Footer from "@/components/footer";
import { FloatingNav } from "@/components/header/floating-navbar";
import HeroSection from "@/components/hero-section";
import HeroParallax from "@/components/image-cross-parallax";
import { AvatarIcon, HomeIcon } from "@radix-ui/react-icons";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <AvatarIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Collections",
      link: "#collections",
    },
    // {
    //   name: "Contact",
    //   link: "#contact",
    //   icon: (
    //     <ChatBubbleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between gap-24 overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <About />
      <HeroParallax />
      <Footer />
    </main>
  );
}
