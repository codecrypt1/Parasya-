"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "@/components/Navbar";
import HomeMain from "@/components/HomeMain";
import ServicesCards from "@/components/ServicesCards";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="w-screen h-screen">
        <NavbarComp />
        <HomeMain />
        <ServicesCards />
      </div>
    </NextUIProvider>
  );
}
