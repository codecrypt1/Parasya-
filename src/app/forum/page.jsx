import AddForum from "./AddForum";
import ForumTile from "./ForumTile";

const Forum = () => {
  return (
    <div
      style={{
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ForumTile />
      <ForumTile />
      <ForumTile />
      <ForumTile />
      <ForumTile />
      <ForumTile />
      <AddForum />
    </div>
  );
};

export default Forum;
