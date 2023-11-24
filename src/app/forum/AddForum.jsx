import React from "react";

const AddForum = () => {
  
  return (
    <div
      className="AddForumTile"
      style={{ alignItems: "center", display: "flex", flexDirection: "row" }}
    >
      <div className="UserIMGAddForum"></div>
      <div className="ForumDetails">
        <h1>USER NAME</h1>
        <input className="inputaddForum" placeholder="Type Here..."></input>
      </div>
    </div>
  );
};

export default AddForum;
