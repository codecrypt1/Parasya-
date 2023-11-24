import Image from "next/image";
import React from "react";

const ShopCard = () => {
  return (
    <div className="grid grid-cols-1 gap-7 mx-10 mt-10 md:grid md:grid-cols-3 ">
      <div className="flex flex-row mx-6 items-center">
        <div className="flex flex-col object-fill items-center border-1 p-6 shadow-lg w-72 h-96 border-inherits">
          <div className=" w-[70%] h-[60%]  border-1 border-cyan-900 relative">
            <Image
              className=""
              src="/shopitems/calculator.webp"
              layout="fill"
            />
          </div>
          <div className=" flex flex-col items-center my-6 mx-4 gap-3 overflow-hidden">
            <p className="text-cyan-900 text-lg">calculator</p>
            <p className="text-cyan-900"> PRICE:567rs</p>
            <div className="flex justify-center text-center  ">
              <p className="w-20 h-8 bg-cyan-900 mp-24 text-white hover:text-cyan-900 hover:bg-cyan-500 ">
                BUY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-6 items-center">
        <div className="flex flex-col object-fill items-center border-1  p-6 shadow-lg w-72 h-96 border-inherits">
          <div className=" w-[70%] h-[60%]  border-1 border-cyan-900 relative">
            <Image
              className=""
              src="/shopitems/calculator.webp"
              layout="fill"
            />
          </div>
          <div className=" flex flex-col items-center my-6 mx-4 gap-3 overflow-hidden">
            <p className="text-cyan-900 text-lg">calculator</p>
            <p className="text-cyan-900"> PRICE:567rs</p>
            <div className="flex justify-center text-center  ">
              <p className="w-20 h-8 bg-cyan-900 mp-24 text-white hover:text-cyan-900 hover:bg-cyan-500 ">
                BUY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-6 items-center">
        <div className="flex flex-col object-fill items-center border-1 p-6 shadow-lg w-72 h-96 border-inherits">
          <div className=" w-[70%] h-[60%]  border-1 border-cyan-900 relative">
            <Image
              className=""
              src="/shopitems/calculator.webp"
              layout="fill"
            />
          </div>
          <div className=" flex flex-col items-center my-6 mx-4 gap-3 overflow-hidden">
            <p className="text-cyan-900 text-lg">calculator</p>
            <p className="text-cyan-900"> PRICE:567rs</p>
            <div className="flex justify-center text-center  ">
              <p className="w-20 h-8 bg-cyan-900 mp-24 text-white hover:text-cyan-900 hover:bg-cyan-500 ">
                BUY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
