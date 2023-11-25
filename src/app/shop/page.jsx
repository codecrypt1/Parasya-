import NavbarComp from "@/components/Navbar";
import ShopCard from "@/components/ShopCard";

import "../../components/main.css";
import HostelCards from "@/components/HostelCards";

let details = [
  {
    id: 1,
    name: "Introduction to Electrical Engineering",
    image: "https://dummyimage.com/600x400/electrical-engineering-book.jpg",
    price: 39.99,
    description:
      "A foundational textbook covering the basics of electrical engineering.",
    availability: "buy",
  },
  {
    id: 2,
    name: "Engineering Mechanics: Statics and Dynamics",
    image: "https://dummyimage.com/600x400/engineering-mechanics-book.jpg",
    price: 49.99,
    description:
      "Comprehensive coverage of statics and dynamics for engineering students.",
    availability: "buy",
  },
  {
    id: 3,
    name: "Drafting and Design Toolkit",
    image: "https://dummyimage.com/600x400/drafting-design-toolkit.jpg",
    price: 89.99,
    description:
      "A complete toolkit for drafting and design, including pencils, rulers, and compass.",
    availability: "buy",
  },
  {
    id: 4,
    name: "Materials Science and Engineering",
    image: "https://dummyimage.com/600x400/materials-science-book.jpg",
    price: 44.99,
    description:
      "Explore the properties and applications of materials in engineering.",
    availability: "buy",
  },
  {
    id: 5,
    name: "Digital Logic Design Kit",
    image: "https://dummyimage.com/600x400/digital-logic-design-kit.jpg",
    price: 79.99,
    description:
      "Hands-on kit for learning and implementing digital logic design concepts.",
    availability: "buy",
  },
  {
    id: 6,
    name: "Structural Analysis Software",
    image: "https://dummyimage.com/600x400/structural-analysis-software.jpg",
    price: 129.99,
    description:
      "Professional software for structural analysis and design projects.",
    availability: "buy",
  },
  {
    id: 7,
    name: "Robotics and Automation Textbook",
    image: "https://dummyimage.com/600x400/robotics-automation-book.jpg",
    price: 54.99,
    description:
      "Comprehensive guide to robotics and automation in engineering.",
    availability: "buy",
  },
  {
    id: 8,
    name: "Engineering Drawing Set",
    image: "https://dummyimage.com/600x400/engineering-drawing-set.jpg",
    price: 19.99,
    description:
      "Essential drawing tools for engineering sketches and diagrams.",
    availability: "buy",
  },
  {
    id: 9,
    name: "Circuit Simulation Software",
    image: "https://dummyimage.com/600x400/circuit-simulation-software.jpg",
    price: 69.99,
    description: "Simulate and analyze electronic circuits with this software.",
    availability: "buy",
  },
  {
    id: 10,
    name: "Renewable Energy Systems Handbook",
    image: "https://dummyimage.com/600x400/renewable-energy-handbook.jpg",
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
