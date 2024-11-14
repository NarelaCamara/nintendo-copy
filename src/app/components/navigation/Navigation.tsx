import Image from "next/image";
import React from "react";
import profilePic from "/public/Nintendo.svg.png";

const Navigation = () => {
  return (
    <div className="">
      <Image src={profilePic} alt="Icono nintendo" />
    </div>
  );
};
export default Navigation;
