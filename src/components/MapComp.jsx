"use client";

import Image from "next/image";
import { useMemo } from "react";
import dynamic from "next/dynamic";
const MapComp = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div className="relative w-full h-full bg-black">
        <Map />
      </div>
    </>
  );
};

export default MapComp;
