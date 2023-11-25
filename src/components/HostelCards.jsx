import React from "react";
import Image from "next/image";

const HostelCards = () => {
  return (
    <div className="flex flex-col items-center w-screen h-64 border border-cyan-800 rounded-lg shadow md:flex-row md:max-w-xl">
      <div className=" w-[40%] h-[100%] overflow-hiddenll relative">
        <Image
          layout="fill"
          className="object-fit  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/greenhut-hostel.webp"
          alt="hostel image"
        />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Green hut mens hostel
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Mens hostel with good furnitured rooms and faciliries with.
        </p>
        <p className="mb-8 font-sans text-gray-900 ">price</p>
      </div>
    </div>
  );
};

export default HostelCards;
