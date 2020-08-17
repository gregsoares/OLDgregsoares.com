import React from "react";

/* == Props ==
 * String: Month
 * Integer: Day
 * String: Week day
 * int int: from : to (00:00:24:00)
 */

export const CalendarCard = (props) => {
  return (
    <div
      className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium"
      data-testid="CalendarCardContainer"
    >
      <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
        <div className="block rounded-t overflow-hidden  text-center ">
          <div className="bg-blue-500 text-white py-1">
            {props.month || "March"}
          </div>
          <div className="pt-1 border-l border-r border-white bg-white">
            <span className="text-5xl font-bold leading-tight">
              {props.day || "17"}
            </span>
          </div>
          <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
            <span className="text-sm">{props.weekday || "Sunday"}</span>
          </div>
          <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
            <span className="text-xs leading-normal">
              {(props.from && props.to) || "8:00 am to 5:00 pm"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
