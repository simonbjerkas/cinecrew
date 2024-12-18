import ConvexClientProvider from "@/components/convex-client-provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </ConvexClientProvider>
  );
}
