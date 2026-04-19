"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/", label: "Calculator" },
  { href: "/worth", label: "Platforms" },
  { href: "/blog", label: "Blog" },
  { href: "/methodology", label: "Methodology" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-border">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-sm font-bold font-[family-name:var(--font-heading)] text-text-primary tracking-wider"
        >
          trafi.cc
        </Link>
        <nav className="flex items-center gap-3">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-xs transition-colors",
                  isActive
                    ? "text-text-primary font-medium"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <ThemeToggle />
    </header>
  );
}
