import React from "react";
import FloatingUser from "./FloatingUser";

const Map = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="images/map.png"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
      />

      <FloatingUser />
    </div>
  );
};

export default Map;
