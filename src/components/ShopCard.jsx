import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./main.css";

// import { FaArrowRight } from "react-icons/fa";

const ShopCard = () => {
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

  return (
    <div className="shoppage">
      <div className="ShopCardMain">
        {CardData.map((Data, index) => (
          <CardShop key={index} {...Data} />
        ))}
      </div>
    </div>
  );
};

export default ShopCard;

function CardShop({ name, image, price }) {
  return (
    <div className="ShopCard">
      <img className="IMGshopCard" src={image} layout="fill" />
      <div className=" flex flex-col items-center my-6 mx-4 gap-3 overflow-hidden">
        <p className="text-cyan-900 text-lg">{name}</p>
        <p className="text-cyan-900">₹{price}</p>
        <div className="flex justify-center text-center  ">
          <Link href="/shop/card" className="BuyButton">
            BUY
            {/* <FaArrowRight /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
