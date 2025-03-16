import React from "react";
import FooterNavigation from "../footer_navigation/footer_navigation";
import Image from "next/image";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-red-600">
        <div className="flex flex-row justify-between ">
          <Image
            width={250}
            height={250}
            src={"/Nintendo.svg.png"}
            alt="Icono nintendo"
          />

          <div className="flex flex-row">
            <div className="p-2">
              <QuestionMarkCircleIcon className="size-6 text-stone-900" />
            </div>
            <div className="p-2">
              <QuestionMarkCircleIcon className="size-6 text-stone-900" />
            </div>
            <div className="p-2">
              <QuestionMarkCircleIcon className="size-6 text-stone-900" />
            </div>
            <div className="p-2">
              <QuestionMarkCircleIcon className="size-6 text-stone-900" />
            </div>
          </div>
        </div>
      </div>

      <FooterNavigation />

      <div className="w-3/5 mx-auto max-w-screen-lg ">
        <p className="px-8 ">
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA
        </p>
        <div className="flex flex-row justify-center px-8">
          <p className="px-4">Contact us</p>
          <p className="px-4">Website feedback</p>
          <p className="px-4">Terms of Use</p>
          <p className="px-4">Flag of Usa English (United States)</p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
