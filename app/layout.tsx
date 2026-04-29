import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; //ignore error in case of error : use dynamic paths
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

import { Poppins } from "next/font/google"

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemoKeep",
  description: "Write. Organize. Remember.",
  icons: {
    icon : [
      {
        media: "(prefers-color-scheme: light)",
        url : "/Memologo.png",
        href : "/Memologo.png",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url : "/Memologo-dark.png",
        href : "/Memologo-dark.png",
      }  
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="MemoKeep-theme"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
