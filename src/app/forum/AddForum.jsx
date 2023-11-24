"use client";

import React from "react";
import { useState } from "react";
import "./Forum.css";
import { FaCircleArrowRight } from "react-icons/fa6";

const AddForum = ({ name, image }) => {
  const [inputValue, setInputValue] = useState("");

  //CHANGE THIS FUNCTION
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/add_forum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          inputValue: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding data to MongoDB:", error);
    }
  };

  return (
    <div
      className="AddForumTile"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <img src={image} className="UserIMGAddForum"></img>
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
  );
};

export default AddForum;
