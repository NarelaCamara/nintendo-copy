import Image from "next/image";
import React from "react";

const CardGame = () => {
  return (
    <div>
      <div className=" m-4 p-6  bg-slate-200 border border-gray-800 rounded-lg shadow-sm    ">
        <div className="flex flex-row">
          <div className="p-4">
            <Image
              src="/stardew_valley.avif"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
              Stardew Valley
            </h5>
            <p className="text-gray-700">Eligible for up to 75 Gold Points</p>
            <p className="mb-3 font-normal text-gray-700  ">$14.99</p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300    ">
              Direct download
            </button>
            <p className="text-gray-700">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
