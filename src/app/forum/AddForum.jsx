"use client";
import React, { useState } from "react";
import "./Forum.css";
import { FaCircleArrowRight } from "react-icons/fa6";

const AddForum = ({ name, image }) => {
  const [inputValue, setInputValue] = useState("");
  const [displayTop, setDisplayTop] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/forum", {
        image:"https://cdn.pixabay.com/photo/2023/10/01/16/01/rose-8287698_640.jpg",
        title: "User name",
        context: inputValue,
      });

      if (!response.ok) {
        throw new Error("Failed to add forum entry");
      }

      // If the FastAPI call is successful, update the state or take other actions
      setDisplayTop(true);
      console.log("Forum entry added successfully");
    } catch (error) {
      console.error("Error adding forum entry:", error);
    }
  };

  return (
    <div className="AddForumTile">
      {displayTop && <div>{inputValue}</div>}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img src={image} alt="User" className="UserIMGAddForum" />
        <div className="ForumDetails">
          <h1>{name}</h1>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="inputaddForum"
            placeholder="Type Here..."
          />
        </div>
        <div onClick={handleSubmit} className="buttonhoverpointer submitButton">
          <FaCircleArrowRight size="30px" color="#022B3A" />
        </div>
      </div>
    </div>
  );
};

export default AddForum;
