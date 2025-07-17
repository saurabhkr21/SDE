//@ts-nocheck
'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Switch, Theme } from "@radix-ui/themes";
import Header from "@/component/Header";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);
  return (
    <html lang="en">
      <body
      ><Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%" appearance={isDark?"dark":"light"}>
          <ThemeContext.Provider value={{isDark,setIsDark}}>
            <Header />
            {children}
          </ThemeContext.Provider>
        </Theme>
      </body>
    </html>
  );
}
