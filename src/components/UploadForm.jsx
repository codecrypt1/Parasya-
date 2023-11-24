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
    
    <div className="bg-[#e1e5f2] w-1/2 ">
      <form class="max-w-sm mx-auto">

        <div className="my-2 ">
        <label class="block px-2 tracking-wide text-[#022b3a] text-sm font-semibold mb-2" for="grid-first-name">
        Item Name
      </label>
            <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-[#1f7a8c] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Item Name"/>
        </div>
        
        <div>
            <label class="block my-2 px-2 text-sm font-medium  text-[#022b3a] dark:text-white" for="user_avatar">Upload file</label>
            <input class="block w-full text-sm text-[#022b3a] border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-[#1f7a8c] focus:outline-none dark:bg-[#022b3a] dark:border-[#1f7a8c] dark:placeholder-[#bfbdf7]" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
  
        </div>
        <div className="my-6">
            <SelectCustom className="w-3/4" options={options}/>
        </div>
        
      </form>
    </div>
  );
};
