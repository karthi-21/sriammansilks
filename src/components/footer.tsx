import Link from "next/link";
import { ThemeToggle } from "./theme/toggle";

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t bg-neutral-50 dark:bg-neutral-900/70 dark:border-white/[0.2]">
      <div className="container flex items-center justify-between">
        <h1>
          © Copyright {new Date().getFullYear()}{" "}
          <Link
            href="https://bezzietech.com"
            className="text-grey-400 hover:text-emerald-500"
          >
            BezzieTech
          </Link>
          . All rights reserved.
        </h1>
        <ThemeToggle />
      </div>
    </footer>
  );
}
