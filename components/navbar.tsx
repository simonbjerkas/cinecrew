"use client";

import { useQuery } from "convex/react";
import { UserMenu } from "./user-menu";
import { api } from "@/convex/_generated/api";

export function Navbar() {
  const viewer = useQuery(api.users.viewer);
  return (
    <header className="flex justify-end border-b p-4 h-16">
      {viewer && <UserMenu>{viewer.name}</UserMenu>}
    </header>
  );
}
