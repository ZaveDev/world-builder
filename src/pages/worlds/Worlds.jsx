import React from "react";
import { WorldCard } from "../../components";
import "./Worlds.css";
export default function Worlds() {
  const worlds = [
    { name: "World1" },
    { name: "World2" },
    { name: "World3" },
    { name: "World4" },
    { name: "World5" },
    { name: "World6" },
    { name: "World7" },
    { name: "World8" },
    { name: "World9" },
    { name: "World10" },
    { name: "World1" },
    { name: "World2" },
    { name: "World3" },
    { name: "World4" },
    { name: "World5" },
    { name: "World6" },
    { name: "World7" },
    { name: "World8" },
    { name: "World9" },
    { name: "World10" },
    { name: "World1" },
    { name: "World2" },
    { name: "World3" },
    { name: "World4" },
    { name: "World5" },
    { name: "World6" },
    { name: "World7" },
    { name: "World8" },
    { name: "World9" },
    { name: "World10" },
    { name: "World1" },
    { name: "World2" },
    { name: "World3" },
    { name: "World4" },
    { name: "World5" },
    { name: "World6" },
    { name: "World7" },
    { name: "World8" },
    { name: "World9" },
    { name: "World10" },
  ];
  return (
    <div className="worlds-container">
      <div className="worlds-header">
        <div>+</div>
        <div className="worlds-header-center">Worlds</div>
        <div>edit</div>
      </div>
      <div className="worlds-list">
        {worlds.map((world) => (
          <WorldCard name={world.name} />
        ))}
      </div>
    </div>
  );
}
