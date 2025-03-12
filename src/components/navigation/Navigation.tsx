import Image from "next/image";
import React from "react";
import profilePic from "/public/Nintendo.svg.png";
import SearchComponent from "../search_component/search_component";
import NavigationIcons from "../navigation_icons/navigation_icons";

const Navigation = () => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-fuchsia-50">
      <div className="w-40">
        <Image src={profilePic} alt="Icono nintendo" />
      </div>

      <SearchComponent />
     
      <NavigationIcons />
    </div>
  );
};
export default Navigation;
