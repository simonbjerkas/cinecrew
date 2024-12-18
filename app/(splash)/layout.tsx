import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function SplashPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-20 border-b bg-background/80 px-4 backdrop-blur md:px-6">
        <nav className="container w-full justify-between font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="/">
            <h1 className="text-base font-semibold">
              Cine<span className="font-extralight">Crew</span>
            </h1>
          </Link>
        </nav>
      </header>
      <main className="flex grow flex-col container px-4">{children}</main>
      <footer className="border-t"></footer>
    </div>
  );
}
