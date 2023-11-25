"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "@/components/Navbar";
import HomeMain from "@/components/HomeMain";
import ServicesCards from "@/components/ServicesCards";
import Loader from "./loader/loader";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NextUIProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="h-screen">
            <NavbarComp />
            <HomeMain />
            <ServicesCards />
            <Footer/>
          </div>
        </div>
      )}
    </NextUIProvider>
  );
}
