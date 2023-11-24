import React from "react";
import "./Forum.css";
import { FaCircleArrowRight } from "react-icons/fa6";

const AddForum = ({ name, image }) => {
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
        <input className="inputaddForum" placeholder="Type Here..." />
      </div>
      <div onClick={{}} className="buttonhoverpointer submitButton">
        <FaCircleArrowRight size="30px" color="#022B3A" />
      </div>
    </div>
  );
};

export default AddForum;
