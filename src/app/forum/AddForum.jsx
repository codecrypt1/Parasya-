import React from "react";

const AddForum = ({ name, image }) => {
  return (
    <div
      className="AddForumTile"
      style={{ alignItems: "center", display: "flex", flexDirection: "row" }}
    >
      <img src={image} className="UserIMGAddForum"></img>
      <div className="ForumDetails">
        <h1>{name}</h1>
        <input className="inputaddForum" placeholder="Type Here..."/>
      </div>
    </div>
  );
};

export default AddForum;
