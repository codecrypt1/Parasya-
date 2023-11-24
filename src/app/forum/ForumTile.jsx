"use client";

import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import "./Forum.css";
import CommentTile from "./Reply";
const ForumTile = () => {
  const PopUpComment = () => {
    const comment = {
      user: {
        name: "John Doe",
        profilePic: "",
      },
      title: "NAME HERE",
      details:
        "Comment Here",
    };
    return (
      <section>
        <div className="popupcomment">
          <div className="commentWindow">
            <div className="closeButton buttonhoverpointer" onClick={handleToggleComment}></div>
            <CommentTile {...comment} />
          </div>
        </div>
      </section>
    );
  };

  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  const handleToggleLike = () => {
    setLike(!like);
  };
  const handleToggleComment = () => {
    setComment(!comment);
  };
  return (
    <div
      className="ForumTile"
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex" }}>
        <div className="leftsection">
          <div className="ForumImg"></div>
          {/* <div className="line"></div> */}
        </div>

        <div className="ForumDetails">
          <h1>TITLE</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          esse ad at pariatur eligendi cumque impedit, accusamus alias eum
          aliquid obcaecati repellendus, adipisci illum omnis tenetur repellat
          officia optio mollitia?
        </div>
      </div>
      <div className="bottomForum">
        <div
          className="ForumButton buttonhoverpointer"
          onClick={handleToggleLike}
        >
          {like ? <AiFillLike size="30px" /> : <AiOutlineLike size="30px" />}
        </div>
        <div
          className="ForumButton buttonhoverpointer"
          onClick={handleToggleComment}
        >
          <FaRegComments size="30px" />
        </div>
      </div>
      {comment ? <PopUpComment /> : <></>}
    </div>
  );
};

export default ForumTile;
