import Image from "next/image";
import React from "react";
import UploadedDetails from "./UploadedDetails";
import { MdEdit } from "react-icons/md";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

const DetailsEdit = () => {
  return (
    <div className="md:flex gap-5 w-screen shadow-md rounded-md overflow-hidden ">
      <div className="relative md:h-96 h-44 w-full md:w-1/2 ">
        <Image src="/map.webp" layout="fill" objectFit="cover" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
        <div className="flex  w-3/4 my-6">
          <div className="w-full flex  gap-4">
            <Input
              isDisabled
              type="text"
              defaultValue="junior@nextui.org"
              className="w-full"
            />
          </div>
          <MdEdit className="-ml-12  my-auto w-8" />
        </div>
        <div className="flex w-3/4 items-center  ">
          <div className="w-full flex flex-col gap-4 ">
            <Input
              isDisabled
              type="number"
              defaultValue="450"
              className="w-full"
            />
          </div>
          <MdEdit className="-ml-12  my-auto w-8" />
        </div>
        <div className="flex w-3/4 items-center   my-6">
          <div className="w-full flex flex-col gap-4 ">
            <Textarea
              isDisabled
              labelPlacement="outside"
              placeholder="Enter your description"
              defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
              className="w-full"
            />
          </div>
          <MdEdit className="-ml-12  my-auto w-8" />
        </div>
        <div className="py-4 px-4">
          <button className=" bg-[#022b3a] px-4 p-1  text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsEdit;
