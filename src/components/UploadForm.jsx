import React from "react";
import SelectCustom from "./SelectCustom";

export const UploadForm = () => {
    let options = [
        {
          id: 1,
          value: "Rent",
          label: "Rent",
        },
        {
            id: 2,
            value: "Sell",
            label: "Sell",
          },
    ];
  return (
    
    <div className="bg-[#e1e5f2] p-3 h-full  ">
        <div className="">
            <h1 className="text-center text-md md:text-lg font-bold ">Add Your Item</h1>
        </div>
      <form class="max-w-sm mx-auto ">

        <div className="mb-2 ">
            <label class="block px-2 tracking-wide text-[#022b3a] text-sm font-semibold mb-2" for="grid-first-name">
            Item Name
            </label>
            <input class="appearance-none block w-full bg-gray-50 text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Item Name"/>
        </div>
        
        <div>
            <label class="block my-2 px-2 text-sm font-medium  text-[#022b3a] dark:text-white" for="user_avatar">Upload file</label>
            <input class="block w-full text-sm text-[#022b3a]  rounded-lg cursor-pointer bg-gray-50 dark:text-[#1f7a8c] focus:outline-none dark:bg-[#022b3a] dark:border-[#1f7a8c] dark:placeholder-[#bfbdf7]" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
  
        </div>
        <div className="my-6">
            <SelectCustom className="w-3/4 " label="Select your Choice" options={options}/>
        </div>
        <div className="mb-2 ">
            <label class="block px-2 tracking-wide text-[#022b3a] text-sm font-semibold mb-2" for="grid-first-name">
               Price
            </label>
            <input class="appearance-none block w-full bg-gray-50 text-[#022b3a]   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="Item Price"/>
        </div>
        <div className="my-4">
            <label for="description" class="block mb-2 px-2 text-sm font-medium text-[#022b3a] dark:text-white">Description</label>
            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-[#022b3a] bg-gray-50 rounded-lg border  dark:bg-gray-700 dark:border-[#022b3a] dark:placeholder-[#022b3a] dark:text-white " placeholder="Leave a comment..."></textarea>
        </div>
        <div className="">
            <button className="bg-[#022b3a] p-2 rounded-md text-white px-4 hover:text-[#1f7a8c]">Add</button>
        </div>
        
      </form>
    </div>
  );
};
