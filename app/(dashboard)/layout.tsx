import { InfoMenu } from "@/components/info-menu";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <InfoMenu />
      <div className="flex flex-col grow max-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
