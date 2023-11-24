import College from "@/components/College";
import NavbarComp from "@/components/Navbar";
import MapComp from "@/components/MapComp";

const Shop = () => {
  return (
    <div>
      <div>
        <NavbarComp />
        <div className="w-screen h-screen flex justify-center items-center">
          <College />
        </div>
      </div>
    </div>
  );
};

export default Shop;
