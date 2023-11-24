import College from "@/components/College";
import NavbarComp from "@/components/Navbar";

const Shop = () => {
  return (
    <div className="">
      <div>
        <NavbarComp />
        <div className=" h-screen flex  justify-center items-center">
          <College />
        </div>
      </div>
    </div>
  );
};

export default Shop;
