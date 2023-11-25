import NavbarComp from "@/components/Navbar";
import ShopCard from "@/components/ShopCard";

import "../../components/main.css";
import HostelCards from "@/components/HostelCards";

let details = [
  {
    id: 1,
    name: "calculator",
    image: "/shopitems/calculator-3.webp",
    price: 39.99,
    description:
      "A foundational textbook covering the basics of electrical engineering.",
    availability: "buy",
  },
  {
    id: 2,
    name: "calculator",
    image: "/shopitems/calculator.webp",
    price: 49.99,
    description:
      "Comprehensive coverage of statics and dynamics for engineering students.",
    availability: "buy",
  },
  {
    id: 3,
    name: "Drafter",
    image: "/shopitems/miinidrafter.webp",
    price: 89.99,
    description:
      "A complete toolkit for drafting and design, including pencils, rulers, and compass.",
    availability: "buy",
  },
  {
    id: 4,
    name: "Basics of civil engineering",
    image: "/shopitems/text-2.webp",
    price: 44.99,
    description:
      "Explore the properties and applications of materials in engineering.",
    availability: "buy",
  },
  {
    id: 5,
    name: "Basics of Electrical Engineering",
    image: "/shopitems/text-3.webp",
    price: 79.99,
    description:
      "Hands-on kit for learning and implementing digital logic design concepts.",
    availability: "buy",
  },
  {
    id: 6,
    name: "Physics and Chemistry text book",
    image: "/shopitems/text-4.webp",
    price: 129.99,
    description:
      "Professional software for structural analysis and design projects.",
    availability: "buy",
  },
  {
    id: 7,
    name: "Engineering Graphics",
    image: "/shopitems/images.jpeg",
    price: 54.99,
    description:
      "Comprehensive guide to robotics and automation in engineering.",
    availability: "buy",
  },
  {
    id: 8,
    name: "Minidrafter",
    image: "/shopitems/minidrafter-3.webp",
    price: 19.99,
    description:
      "Essential drawing tools for engineering sketches and diagrams.",
    availability: "buy",
  },
  {
    id: 9,
    name: "Scientific Calculator",
    image: "/shopitems/map.webp",
    price: 69.99,
    description: "Simulate and analyze electronic circuits with this software.",
    availability: "buy",
  },
  {
    id: 10,
    name: "Engineering Mechanics",
    image: "/shopitems/text-6.webp",
    price: 64.99,
    description:
      "Comprehensive handbook on renewable energy systems for engineers.",
    availability: "rent",
  },
];

const Map = () => {
  return (
    <div>
      <div>
        <NavbarComp />
        <ShopCard details={details} />
      </div>
    </div>
  );
};

export default Map;
