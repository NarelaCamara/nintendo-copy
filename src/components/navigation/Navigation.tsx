import Image from "next/image";
import React from "react";
import profilePic from "/public/Nintendo.svg.png";
import SearchComponent from "../search_component/search_component";
import NavigationIcons from "../navigation_icons/navigation_icons";

const Navigation = () => {
  return (
    <div className=" flex flex-row justify-between bg-slate-400">
      <div className="flex flex-row">
        <div className="w-40">
          <Image src={profilePic} alt="Icono nintendo" />
        </div>

        <SearchComponent />
      </div>

      <NavigationIcons />
    </div>
  );
};
export default Navigation;
