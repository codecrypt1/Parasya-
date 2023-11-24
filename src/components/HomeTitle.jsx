import React from "react";
import "./main.css";
import Link from "next/link";

import { FaArrowDown } from "react-icons/fa6";

const HomeTitle = () => {
  return (
    <div className="hometitlecover">
      <div className="hometitle">
        <div className="texttitle">Empowering Students</div>
        <div className="texttitle">Simplifying Rentals</div>
        <div className="texttitle">Enriching Lives</div>
        <Link href="#explore" className="explorebutton">
          <div style={{ fontSize: "30px" }}>Explore</div>
          <div className="">
            <FaArrowDown size="40px"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
