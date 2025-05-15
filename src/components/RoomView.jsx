import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function RoomView() {
  const { roomName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen relative">
      {/* 360 View Canvas */}
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
        <div className="w-3/4  h-3/4">
          <Canvas camera={{ position: [0, 0, 0.1] }}>
            <ambientLight intensity={1} />
            <Environment preset="city" />
            <Sphere args={[500, 60, 40]} scale={1}>
              <meshStandardMaterial
                map={new THREE.TextureLoader().load(
                 `${import.meta.env.BASE_URL}assets/${roomName}-360.jpg`
                )}
                side={THREE.BackSide}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <br />
        <h2 onClick={() => navigate("/")} className="cursor-pointer">
          ⬅ Back
        </h2>
      </div>
    </div>
  );
}
