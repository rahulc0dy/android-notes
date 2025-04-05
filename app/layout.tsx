import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import type { ReactNode } from "react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira-code",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.className} ${firaCode.variable}`}
      suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
