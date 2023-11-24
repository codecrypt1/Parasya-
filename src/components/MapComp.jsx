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
        <Map width="800" height="400" zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>

        <Image src="/map.webp" layout="fill" />
      </div>
    </>
  );
};

export default MapComp;
