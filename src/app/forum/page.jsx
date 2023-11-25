"use client";

import NavbarComp from "@/components/Navbar";
import AddForum from "./AddForum";
import ForumTile from "./ForumTile";
import { useEffect, useState } from "react";
import axios from "axios";

const Forum = () => {
  const [forums, setForumData] = useState([]);
  const userData = [
    {
      name: "USERNAME",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/forum');
        const data = await response.json();
        setForumData(data);
        console.log("RESPONSE: ",response)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#08283A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      <NavbarComp />
      <div className="">
        {forums.map((forum, index) => (
          <ForumTile key={index} {...forum} />
        ))}
      </div>

      {userData.map((userData, index) => (
        <AddForum key={index} {...userData} />
      ))}
    </div>
  );
};

export default Forum;
