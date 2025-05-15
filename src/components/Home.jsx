import React from "react";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    name: "bedroom",
    image: `${import.meta.env.BASE_URL}assets/bedroom-360.jpg`,
  },
  {
    name: "kitchen",
    image: `${import.meta.env.BASE_URL}assets/kitchen-360.jpg`,
  },
  { name: "toilet", image: `${import.meta.env.BASE_URL}assets/toilet-360.jpg` },
  {
    name: "drawing",
    image: `${import.meta.env.BASE_URL}assets/drawing-360.jpg`,
  },
  {
    name: "terrace",
    image: `${import.meta.env.BASE_URL}assets/terrace-360.jpg`,
  },
  { name: "garden", image: `${import.meta.env.BASE_URL}assets/garden-360.jpg` },
  { name: "lawn", image: `${import.meta.env.BASE_URL}assets/lawn-360.jpg` },
  { name: "dining", image: `${import.meta.env.BASE_URL}assets/dining-360.jpg` },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Top Bold Heading */}
      <br />
      <h1 className="text-3xl font-bold text-center">LUXURIOUS HOUSE TOUR</h1>
      <br />

      {/* Rounded Rectangle */}
      <div className="w-1/2 max-w-4xl flex items-center justify-center  p-4">
        <img
          src="assets/luxury-house.jpg"
          alt="Luxury House"
          className="w-full"
        />
      </div>
      <br />
      {/* Thumbnails in a Row */}
      <div className="w-full px-4 py-6">
        <div className="grid grid-cols-4 md:grid-cols-8gap-4">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => navigate(`/room/${room.name}`)}
            >
              <img
                src={`${room.image}`}
                alt={room.name}
                className="w-[20vw] h-[22vh] xs:w-[11vw] xs:h-[16vh] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <br />
              <h5 className="mt-2 font-medium text-gray-800 text-center">
                {room.name.toUpperCase()}
              </h5>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
