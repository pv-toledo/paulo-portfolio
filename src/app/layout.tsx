import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calSans = localFont({
  src: '/_fonts/CalSans-SemiBold.woff2',
  variable: "--font-cal-sans"
})

export const metadata: Metadata = {
  title: "Paulo Vinícius | Home",
  description: "Personal portfolio",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased font-main", interSans.variable, calSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
