import React from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const SearchComponent = () => {
  return (
    <div>
      <MagnifyingGlassIcon className="size-6 text-stone-900" />

      <ChevronUpIcon className="size-6 text-stone-900" />

      <ChevronDownIcon className="size-6 text-stone-900" />
    </div>
  );
};

export default SearchComponent;
