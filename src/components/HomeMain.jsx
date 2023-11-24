import { image } from "@nextui-org/react";
import React from "react";
import "./main.css";
import { ThreeCanvas } from "@/app/3d/ThreeCanvas";
import HomeTitle from "./HomeTitle";

const HomeMain = () => {
  return (
    <div
      className="HomeMain bg-cyan-950 flex items-center text-center mx-auto h-screen"
      style={{
        // backgroundImage: `url('/cover.png')`,
        backgroundPosition: "center",
        backgroundSize: "1000px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomeTitle/>
      <ThreeCanvas />
      {/* <h1 className="text-gray-300 text-left text-4xl  md:text-6xl mx-auto  gap-2">
        EMPOWERING STUDENTS <br />{" "}
        <span className="ml-6">SIMPLIFYING RENTALS </span> <br />{" "}
        <span className="ml-20"> ENRICHING LIVES </span>{" "}
      </h1> */}
      
    </div>
  );
};
export default HomeMain;
