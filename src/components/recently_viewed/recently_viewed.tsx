import React from "react";
import MoreLikeThis from "../more_like_this/more_like_this";

const RecentlyViewed = () => {
  return (
    <div>
      <h4>More like this</h4>

      <div className="flex flex-row">
        {[1, 2, 3, 4, 9].map((e) => {
          return <MoreLikeThis key={e} />;
        })}
      </div>
    </div>
  );
};

export default RecentlyViewed;
