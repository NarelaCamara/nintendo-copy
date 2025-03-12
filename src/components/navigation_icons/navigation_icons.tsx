import React from "react";
import {
  QuestionMarkCircleIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const NavigationIcons = () => {
  return (
    <div className="w-60 flex flex-row content-around">
      <div className="w-20 flex flex-row items-center  ">
        <QuestionMarkCircleIcon className="size-6 text-stone-900" />
        <p className="text-black">Support</p>
      </div>
      <div className="w-20 flex flex-row items-center  ">
        <HeartIcon className="size-6 text-stone-900" />
        <p className="text-black">Wish list</p>
      </div>
      <div className="w-20 flex flex-row items-center  ">
        <UserIcon className="size-6 text-stone-900" />
        <p className="text-black"> Login / sing up</p>
      </div>
    </div>
  );
};

export default NavigationIcons;
