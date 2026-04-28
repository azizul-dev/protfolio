import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animation/SmoothScroll";
import CustomCursor from "@/components/animation/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Portfolio | React.js Developer",
  description: "I build high-performance web applications with a focus on clean code, technical mastery, and seamless user experiences.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ClickBurst from "@/components/animation/ClickBurst";
import ScrollToTop from "@/components/animation/ScrollToTop";
import FloatingDot from "@/components/animation/FloatingDot";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary selection:text-on-primary`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <CustomCursor />
            <ClickBurst />
            <ScrollToTop />
            <FloatingDot />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
