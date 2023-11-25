import College from "@/components/College";
import NavbarComp from "@/components/Navbar";

const Shop = () => {
  return (
    <div className="">
      <div>
        <NavbarComp />
        <div className=" h-screen flex flex-col  justify-center items-center mb-4">
          <p className="text-2xl text-cyan-900 font-bold mb-8">
            Easily locate the nearby hostels and their information.
          </p>
          <College />
        </div>
      </div>
    </div>
  );
};

export default Shop;
