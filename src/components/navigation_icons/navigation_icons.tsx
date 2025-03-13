import React from "react";
import {
  QuestionMarkCircleIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const NavigationIcons = () => {
  return (
    <div className="w-120 flex flex-row   ">
      <div className=" p-4 flex flex-row items-center  ">
        <QuestionMarkCircleIcon className="size-6 text-stone-900" />
        <p className="text-black">Support</p>
      </div>
      <div className=" p-4 flex flex-row items-center  ">
        <HeartIcon className="size-6 text-stone-900" />
        <p className="text-black">Wish list</p>
      </div>
      <div className=" p-4 flex flex-row items-center  ">
        <ShoppingCartIcon className="size-6 text-stone-900" />
        <p className="text-black">Cart</p>
      </div>
      <div className=" p-4 flex flex-row items-center  ">
        <UserIcon className="size-6 text-stone-900" />
        <p className="text-black"> Login / sing up</p>
      </div>
    </div>
  );
};

export default NavigationIcons;
