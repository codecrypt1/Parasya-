import College from "@/components/College";
import NavbarComp from "@/components/Navbar";

const Shop = () => {
  return (
    <div>
      <div>
        <NavbarComp />
        <div className="w-full h-full flex justify-center items-center">
          <College />
        </div>
      </div>
    </div>
  );
};

export default Shop;
