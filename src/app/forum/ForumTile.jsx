"use client";

import React, { useState } from "react";
import {LikeSvg, UNLikeSvg} from './Reply'

//icons
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";

import "./Forum.css";
import CommentTile from "./Reply";
const ForumTile = ({ image, title, context, comments }) => {
  const PopUpComment = () => {
    return (
      <section>
        <div className="popupcomment">
          <div className="commentWindow">
            <div
              className="closeButton buttonhoverpointer"
              onClick={handleToggleComment}
            >
              <IoMdClose size="30px" />
            </div>
            {comments.map((comment, index) => (
              <CommentTile key={index} {...comment} />
            ))}
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
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex"}}>
        <div className="leftsection">
          <img alt="" src={image} className="ForumImg"></img>
          <div className="line"></div>
        </div>

        <div className="ForumDetails">
          <h1 style={{fontWeight:"800"}}>{title}</h1>
          {context}
        </div>
      </div>
      <div className="bottomForum">
        <div
          className="ForumButton buttonhoverpointer"
          onClick={handleToggleLike}
        >
          {like ? <UNLikeSvg /> : <LikeSvg />}
        </div>
        <div
          className="ForumButton buttonhoverpointer"
          onClick={handleToggleComment}
        >
          <FaRegComments size="22px" />
        </div>
      </div>
      {comment ? <PopUpComment /> : <></>}
    </div>
  );
};

export default ForumTile;
