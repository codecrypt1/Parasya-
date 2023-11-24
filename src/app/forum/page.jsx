import NavbarComp from "@/components/Navbar";
import AddForum from "./AddForum";
import ForumTile from "./ForumTile";

const Forum = () => {
  const userData = [
    {
      name: "My name"
    }
  ]
  const forums = [
    {
      image: "https://cdn.pixabay.com/photo/2023/10/01/16/01/rose-8287698_640.jpg",
      title: "Main Name 1",
      context: "Lorem Ipsum dcyeg ybsydbtvf fuesvvufbesv",
      comments: [
        {
          user: {
            name: "",
            profilePic: "https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_640.jpg",
          },
          title: "Name 1",
          details: "Comment Here",
        },
        {
          user: {
            name: "",
            profilePic: "https://cdn.pixabay.com/photo/2023/10/24/09/23/black-peppercorn-8337820_640.jpg",
          },
          title: "Name 2",
          details: "Comment Here",
        },
      ],
    },
    
    {
      image: "https://cdn.pixabay.com/photo/2023/10/27/16/15/honey-bee-8345726_640.jpg",
      title: "main Name 2",
      context: "Lorem Ipsum",
      comments: [
        {
          user: {
            name: "",
            profilePic: "https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_640.jpg",
          },
          title: "Name 3",
          details: "OK da",
        },
      ],
    },
  ];
  return (
    <div
      style={{
        backgroundColor:"#08283A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      <NavbarComp />
      {forums.map((forum, index) => (
        <ForumTile key={index} {...forum} />
      ))}
      <AddForum {...userData}/>
    </div>
  );
};

export default Forum;
