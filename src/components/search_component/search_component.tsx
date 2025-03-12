import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const SearchComponent = () => {
  const [changeChevron, setChangeChevron] = useState(true);
  return (
    <div className="grid grid-cols-3 bg-slate-500 w-64 ">
      <div>
        <MagnifyingGlassIcon className="size-6 text-stone-900" />
      </div>

      <p>Search</p>
      <h3 className="">All categories</h3>

      <div
        className="absolute  border-black w-60 m-4 "
        onClick={() => setChangeChevron(!changeChevron)}
      >
        <ChevronDownIcon
          className={`   ${
            changeChevron
              ? "duration-300 transform rotate-180"
              : " duration-300 transform "
          } size-6 text-stone-900`}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
