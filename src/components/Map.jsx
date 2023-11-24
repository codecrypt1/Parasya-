"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import Link from "next/link";

const data = {
  hostels: {
    "Arafa Homes": {
      lat: "10.555287780920084",
      long: " 76.21682386014949",
      for: "ladies",
    },
    sk: {
      lat: "10.555997799408276",
      long: " 76.224879240693",
      for: "ladies",
    },
    "Golden Hostel": {
      lat: "10.620069923071503",
      long: " 76.20148968349517",
      for: "ladies",
    },
    Haritha: {
      lat: "10.556175723887447",
      long: " 76.22415662620175",
      for: "ladies",
    },
    Kaveri: {
      lat: "10.55206469544683",
      long: "76.22422649555052",
      for: "ladies",
    },
    Nirmalyam: {
      lat: "10.551423043229407",
      long: "76.22526921085863",
      for: "ladies",
    },
    "Lucy Villa": {
      lat: "10.542810257661364",
      long: "76.21604479551534",
      for: "ladies",
    },
    "Rahul Villa": {
      lat: "10.549472401952144",
      long: "76.22158888387322",
      for: "ladies",
    },
    Wisdom: { lat: "10.549832", long: "76.220132", for: "ladies" },
    Bethlehem: {
      lat: "10.549309582555225",
      long: " 76.22114577357513",
      for: "ladies",
    },
    Indraneelam: {
      lat: "10.555826704216269",
      long: " 76.22455924861801",
      for: "ladies",
    },
    "Karthika Homes": {
      lat: "10.55385420350871",
      long: " 76.2314266431732",
      for: "ladies",
    },
    Adams: {
      lat: "10.548757331473237",
      long: " 76.22417026537134",
      for: "ladies",
    },
    Arafa: {
      lat: "10.55201003323083",
      long: " 76.22880951715527",
      for: "ladies",
    },
    Sara: {
      lat: "10.558262496135987",
      long: " 76.23042993509999",
      for: "ladies",
    },
    Keerthy: {
      lat: "10.55721173082683",
      long: " 76.22915722692784",
      for: "ladies",
    },
    Karthika: {
      lat: "10.550872878079872",
      long: " 76.2302446385272",
      for: "ladies",
    },
    Ormakkayi: {
      lat: "10.552262668460848",
      long: " 76.22920572855996",
      for: "mens",
    },
    Devi: {
      lat: "10.552787270287439",
      long: " 76.22902423339075",
      for: "mens",
    },
    "Kaveri Boys": {
      lat: "10.551682218485114",
      long: " 76.22372431677002",
      for: "mens",
    },
    "White house": {
      lat: "10.549208929400562",
      long: " 76.22403185202681",
      for: "mens",
    },
    Akshay: {
      lat: "10.549888352300966",
      long: " 76.22368734373164",
      for: "mens",
    },
    "Red House": {
      lat: "10.549086349658163",
      long: "76.22454651085857",
      for: "mens",
    },
    Ushas: {
      lat: "10.550251617782983",
      long: " 76.22464913456534",
      for: "mens",
    },
    Krishnanjali: {
      lat: "10.551042864674061",
      long: " 76.22420672993708",
      for: "mens",
    },
    Navaneetham: {
      lat: "10.551704632966297",
      long: " 76.22923915452013",
      for: "mens",
    },
    Palazhy: {
      lat: "10.55070613493769",
      long: " 76.22297702001987",
      for: "mens",
    },
    "Green Hut": {
      lat: "10.549411426241443",
      long: " 76.2214989544512",
      for: "mens",
    },
    "Sreelakam Hostel": {
      lat: "10.550213211706518",
      long: " 76.22433897917277",
      for: "mens",
    },
    "Surya Hostel": {
      lat: "10.547410208085493",
      long: " 76.22668360302104",
      for: "mens",
    },
  },
};

const ICON = icon({
  iconUrl: "/marker_dark.png",
  iconSize: [18, 22],
});

const Map = () => {
  const { hostels } = data;

  return (
    <MapContainer center={[10.554722, 76.224521]} zoom={13} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(hostels).map((e, i) => {
        let { lat, long } = hostels[e];
        return (
          <Marker icon={ICON} position={[lat, long]}>
            <Popup>
              <Link
                target="_blank"
                href={`https://maps.google.com/?q=${lat + "," + long}`}
              >
                {e}{" "}
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
