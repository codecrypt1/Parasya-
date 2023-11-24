"use client"

import NavbarComp from "@/components/Navbar";
import React, { Component }  from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import 'flowbite';

const page = () => {
  return (
    <div>
        <NavbarComp/>
        <div className="p-4  md:flex w-full md:gap-5  ">
            
            <div id="default-carousel" class="relative md:w-1/2  " data-carousel="slide">
               
                <div class="relative h-56 overflow-hidden  md:h-96">
                    
                    <div class="hidden duration-700 ease-in-out " data-carousel-item>
                        <img src="https://imgs.search.brave.com/kau4VQcK_tDOp3lsvb_gEc1Krt8R55udIlZTkpODCzM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNmJpNndL/SU01RERNNVUxUHRH/VkZjUC8xYzdmY2U2/ZGUzM2JiNjU3NTU0/OGE2NDZmZjliMDNh/YS9uYXR1cmUtcGhv/dG9ncmFwaHktcGlj/dHVyZXMuanBnP2Zp/dD1maWxsJnc9NjAw/Jmg9NDAw" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgs.search.brave.com/ubEgpQeGtaMXab92Ju16fqToaH7uTJcKaweirUiRskY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgs.search.brave.com/XjtPykzWwAc5qP2Rm5HOyoQf9w9K1FUNJT_2gKsMeVs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/MjU3OTU0L3Bob3Rv/L3NjZW5pYy1waG90/by1vZi10aGUtY2Fs/bS1jaGVha2FtdXMt/bGFrZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bm1TN2Z2/YWhZU0h2Rm9SZ0FT/UXB6XzhoU3lZQTRR/NzJkeUlNdXZlM2J2/Yz0" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgs.search.brave.com/-afbGQLMisWUGlpyKoT3x2BTJAcmszX6zllYH_wypdE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full" alt="..."/>
                    </div>
                 
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgs.search.brave.com/XjtPykzWwAc5qP2Rm5HOyoQf9w9K1FUNJT_2gKsMeVs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/MjU3OTU0L3Bob3Rv/L3NjZW5pYy1waG90/by1vZi10aGUtY2Fs/bS1jaGVha2FtdXMt/bGFrZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bm1TN2Z2/YWhZU0h2Rm9SZ0FT/UXB6XzhoU3lZQTRR/NzJkeUlNdXZlM2J2/Yz0" class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>
               
                <div class="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-4 h-1 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-4 h-1 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-4 h-1 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-4 h-1 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-4 h-1 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                

            </div>
            <div className="my-auto md:w-1/2 ">
                <div className=" md:flex-col flex justify-between md:mx-6 ">
                   <div>
                    <h1 className="text-xl font-bold my-4">
                       PRODUCT NAME
                    </h1>
                   </div>
                   <div>
                      <h1 className="text-xl font-semibold my-4 md:my-0">Price</h1>
                   </div>
                </div >
                <div className="  md:mx-6 md:my-4 md:w-3/4">
                    <h1 className="text-md my-4">Description</h1>
                    <h1 className="text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. </h1>
                </div>
                <div>
                    <button className=" text-sm  p-3 rounded-md my-4 md:my-0 md:mx-6 bg-[#022b3a] text-white">BUY NOW</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default page;
