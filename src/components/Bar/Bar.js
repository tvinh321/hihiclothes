import React from "react";

const nonCurrentDayClasses = `
  w-8
  sm:w-[50px]
  bg-red-300
  group-hover:bg-light-red
  rounded-sm
`;

const currentDayClasses = `
  w-8
  sm:w-[50px]
  bg-cyan
  group-hover:bg-light-cyan
  rounded-sm
`;

const Bar = ({ height, isCurrentDay }) => {
  return (
    <div
      className={isCurrentDay ? currentDayClasses : nonCurrentDayClasses}
      style={{ height: `${height}px` }}></div>
  );
};

export default Bar;