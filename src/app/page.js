"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "@/components/Navbar";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="w-screen h-screen">
        <NavbarComp />
        <div>Hello world</div>
      </div>
    </NextUIProvider>
  );
}
