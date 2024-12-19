"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ArchiveIcon,
  AvatarIcon,
  ChatBubbleIcon,
  HomeIcon,
  ReaderIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export function InfoMenu() {
  const path = usePathname();
  return (
    <aside className="w-48 border-r bg-muted/40 p-2">
      <nav className="flex h-full max-h-screen flex-col gap-2">
        <MenuLink href="/" active={path === "/"}>
          <HomeIcon className="h-4 w-4" />
          Home
        </MenuLink>
        <MenuLink href="/news" active={path === "/news"}>
          <ArchiveIcon className="h-4 w-4" />
          Week news
        </MenuLink>
        <MenuLink href="/programming" active={path === "/programming"}>
          <VideoIcon className="h-4 w-4" />
          Programming
        </MenuLink>
        <MenuLink href="/reports" active={path === "/reports"}>
          <ReaderIcon className="h-4 w-4" />
          Reports
        </MenuLink>
        <MenuLink href="/employees" active={path === "/emplyees"}>
          <AvatarIcon className="h-4 w-4" />
          Employees
        </MenuLink>
        <MenuLink href="/chat" active={path === "/chat"}>
          <ChatBubbleIcon className="h-4 w-4" />
          Chat
        </MenuLink>
      </nav>
    </aside>
  );
}

function MenuLink({
  active,
  href,
  children,
}: {
  active?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  text-muted-foreground transition-all hover:text-primary",
        active && "bg-muted text-primary",
      )}
    >
      {children}
    </Link>
  );
}
