import React from "react";
import Image from "next/image";

const HostelCards = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col items-center w-full h-32 border-1 border-cyan-900 rounded-lg shadow md:flex-row md:max-w-xl">
        <div className=" w-[40%] h-[100%] overflow-hidden relative">
          <Image
            layout="fill"
            className="object-fit  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/hostel/greenhut-hostel.jpeg"
            alt="hostel image"
          />
        </div>
        <div class="flex flex-col justify-between p-4 mb-6 text-center leading-normal">
          <h5 class="mb-2 text-xl pt-6 font-bold tracking-tight text-gray-900 dark:text-white">
            Green hut mens hostel
          </h5>
          <p class=" font-normal text-gray-700 dark:text-gray-400">
            Mens hostel with good furnitured rooms and facilities with free
            wifi.
          </p>
          <div className="flex justify-center">
            <button className=" font-sans bg-cyan-600 w-16 h-6  text-white rounded-md hover:bg-cyan-900">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-32 border-1 border-cyan-900 rounded-lg shadow md:flex-row md:max-w-xl">
        <div className=" w-[40%] h-[100%] overflow-hidden relative">
          <Image
            layout="fill"
            className="object-fit  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/hostel/kaveri-mens.jpeg"
            alt="hostel image"
          />
        </div>
        <div class="flex flex-col justify-between p-4 mb-6 text-center leading-normal">
          <h5 class="mb-2 text-xl pt-6 font-bold tracking-tight text-gray-900 dark:text-white">
            Kaveri mens hostel
          </h5>
          <p class=" font-normal text-gray-700 dark:text-gray-400">
            Mens hostel with good furnitured rooms and appliances with free
            wifi.
          </p>
          <div className="flex justify-center">
            <button className=" font-sans bg-cyan-600 w-16 h-6  text-white rounded-md hover:bg-cyan-900">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-32 border-1 border-cyan-900 rounded-lg shadow md:flex-row md:max-w-xl">
        <div className=" w-[40%] h-[100%] overflow-hidden relative">
          <Image
            layout="fill"
            className="object-fit  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/hostel/mea-mens.jpeg"
            alt="hostel image"
          />
        </div>
        <div class="flex flex-col justify-between p-4 mb-6 text-center leading-normal">
          <h5 class="mb-2 text-xl pt-6 font-bold tracking-tight text-gray-900 dark:text-white">
            MEA mens hostel
          </h5>
          <p class=" font-normal text-gray-700 dark:text-gray-400">
            Mens hostel with good furnitured rooms and facilities with free
            wifi.
          </p>
          <div className="flex justify-center">
            <button className=" font-sans bg-cyan-600 w-16 h-6  text-white rounded-md hover:bg-cyan-900">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center overflow-hidden w-full h-32 border-1 border-cyan-900 rounded-lg shadow md:flex-row md:max-w-xl">
        <div className=" w-[40%] h-[100%] overflow-hidden relative">
          <Image
            layout="fill"
            className="object-fit  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/hostel/hostel_data.jpeg"
            alt="hostel image"
          />
        </div>
        <div class="flex flex-col justify-between p-4 mb-6 text-center leading-normal">
          <h5 class="mb-2 text-xl pt-6 font-bold tracking-tight text-gray-900 dark:text-white">
            Blessings ladies hostel
          </h5>
          <p class=" font-normal text-gray-700 dark:text-gray-400">
            Ladies hostel with good furnitured rooms.
          </p>
          <div className="flex justify-center">
            <button className=" font-sans bg-cyan-600 w-16 h-6  text-white rounded-md hover:bg-cyan-900">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelCards;
