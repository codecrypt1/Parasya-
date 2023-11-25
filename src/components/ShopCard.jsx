"use client";

import Image from "next/image";
import Link from "next/link";

import Fuse from "fuse.js";
import React, { useEffect, useRef, useState } from "react";
import "./main.css";

const ShopCard = ({ details }) => {
  const CardData = [
    {
      name: "NAME",
      price: "500",
      image: "/shopitems/calculator.webp",
    },
    {
      name: "NAME 2",
      price: "50",
      image: "/shopitems/calculator.webp",
    },
    {
      name: "NAME 3",
      price: "300",
      image: "/shopitems/calculator.webp",
    },
  ];

  let inputRef = useRef();

  useEffect(() => {
    setData(details);
  }, []);

  let [data, setData] = useState([]);

  const fuse = new Fuse(details, {
    keys: ["name", "price", "description"],
  });

  let handleClick = () => {
    let value = inputRef.current.value;
    if (value == "") return setData(details);
    let data = fuse.search(value);
    data = data.map((e) => {
      return e.item;
    });
    setData(data);
  };

  return (
    <div className="md:flex w-full ">
      <div className="md:w-1/4 bg-[#022b3a]  overflow-hidden">
        <form className=" fixed">
          <label
            for="default-search"
            class="mb-2 fixed  text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-[#022b3a] rounded-lg bg-gray-50 f dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
              placeholder="Search ..."
              required
              ref={inputRef}
              onChange={handleClick}
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-[#022b3a]   font-medium rounded-lg text-sm px-4 py-2  "
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="  bg-[#e1e5f2] shoppage md:w-3/4  ">
        <div className="ShopCardMain">
          {data.map((Data, index) => (
            <CardShop key={index} {...Data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

function CardShop({ name, image, price, id }) {
  return (
    <div>
      <div className="ShopCard ">
        <img className="IMGshopCard" src={image} layout="fill" />
        <div className=" flex flex-col items-center text-center my-6 mx-4 gap-3 overflow-hidden">
          <p className="text-cyan-900 text-lg">{name}</p>
          <p className="text-cyan-900">₹{price}</p>
          <div className="flex justify-center text-center  ">
            <Link href={`/shop/card?q=${id}`} className="BuyButton">
              BUY
              {/* <FaArrowRight /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
