import Image from "next/image";
import React from "react";

const UploadedDetails = () => {
  return (
    <div className="mx-auto shadow-md text-[#022b3a]  text-base md:text-xl rounded-xl font-semibold  overflow-hidden">
      <div className="flex gap-5  pr-6  justify-between rounded-xl ">
        <div className="relative md:h-20 h-16 w-16 md:w-20 ">
          <Image src="/map.webp" layout="fill" objectFit="cover" />
        </div>
        <div className="my-auto">
            <h1>Product Name</h1>
        </div>
        <div className="my-auto">
            <h1>Rent</h1>
        </div>
      </div>
    </div>
  );
};

export default UploadedDetails;
