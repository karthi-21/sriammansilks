import { ThemeToggle } from "./theme/toggle";

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t bg-neutral-50 dark:bg-neutral-900/70 dark:border-white/[0.2]">
      <div className="container flex items-center justify-between">
        <h1>Sri Amman Silks and Traders</h1>
        <ThemeToggle />
      </div>
    </footer>
  );
}
