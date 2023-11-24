import React from "react";
import "./main.css";

const ServicesCards = () => {
  return (
    <div
      id="explore"
      className="ExploreSection"
      style={{ zIndex: "8", backgroundColor: "white" }}
    >
      <div className=" flex flex-col items-center my-10 mx-8">
        <h1 className="text-2xl md:text-3xl  font-bold text-cyan-900">
          STUDENTS HUB CONNECT
        </h1>
        <div className="grid grid-cols-1   md:w-3/5 items-end  h-auto bg-green mx-3 mt-8  md-grid-col-4 gap-4">
          <p className="text-xl text-center font-serif text-gray-400 mx-4  ">
            Welcome to studenthu Connect, your all-in-one platform designed
            exclusively for college students! Discover a seamless experience
            where you can rent or buy essential products tailored to your
            academic needs right within your college campus. From textbooks,
            electronics, and study materials to everyday essentials, find what
            you need hassle-free. Additionally, explore our hostel finder tool,
            making it easy to locate suitable accommodations near your campus.
            But that's not all! Connect, engage, and collaborate with fellow
            students through our integrated chat platform. Exchange ideas, seek
            advice, or simply socialize within a dedicated space for your campus
            community. At Studenthub connect, we're dedicated to enhancing your
            college journey by simplifying access to resources, accommodation,
            and fostering a vibrant community for meaningful interactions. Join
            us and make your college life more convenient and enjoyable.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-7 mx-8 mt-10 pb-6 md:grid-cols-2 lg:grid-cols-3">
        {/*  */}
        {/* <div class="HomeCard1">
          <a href="/shop">
            <h5 class="HomeCardTitle">BLACK MARKET</h5>
          </a>
          <p class="HomeCardDetails" style={{ padding: "10px" }}>
            Here you can buy and rent any college products.
          </p>
          <a
            href="/shop"
            class="ReadMoreButton inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div> */}

        <div class="max-w-sm p-6 bg-white border border-cyan-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/shop">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-900 dark:text-white">
              BLACK MARKET
            </h5>
          </a>
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
            style={{ padding: "10px" }}
          >
            Here you can buy and rent any college products.
          </p>
          <a
            href="/shop"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/*  */}
        <div class="max-w-sm p-4 bg-white border border-cyan-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/forum">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-900 dark:text-white">
              CHAT WITH MATES
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here you can chat with with your college mates.
          </p>
          <a
            href="/forum"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div class="max-w-sm p-6 bg-white border border-cyan-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/map">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-900 dark:text-white">
              HOSTEL FINDER
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            These is where you can locate the hostel that best suits your needs.
          </p>
          <a
            href="/map"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
