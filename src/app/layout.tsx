import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anadi Pandharkar",
  description:
    "Product management, design, full-stack and platform engineering. Free lessons on a live product.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <RootProvider
          theme={{ enabled: false }}
          search={{ enabled: false }}
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </RootProvider>
      </body>
    </html>
  );
}
