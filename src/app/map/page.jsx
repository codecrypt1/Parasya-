import College from "@/components/College";
import NavbarComp from "@/components/Navbar";
import MapComp from "@/components/MapComp";
import HostelCards from "@/components/HostelCards";

const Shop = () => {
  return (
    <div className="">
      <div>
        <NavbarComp />
        <div className="w-screen h-screen flex  justify-center items-center">
          <College />
        </div>
      </div>
    </div>
  );
};

export default Shop;
