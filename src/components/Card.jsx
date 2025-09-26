import React from 'react';
import d from "../assets/dateof birth.png"
const Card = ({ date, handleClick }) => {

  
  return (
    <div
      onClick={() => handleClick(date)}
      className="card bg-base-100  shadow-xl  "
    >
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-4 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900">{date.title}</h2>
          <span
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full  ${
              date.status === "Open"
                ? "border-green-300 bg-[#B9F8CF] text-green-700"
                : date.status === "In-Progress"
                ? "bg-[#F8F3B9] text-[#9C7700]"
                : null
            }  `}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                date.status === "Open"
                  ? "bg-green-500"
                  : date.status === "In-Progress"
                  ? "bg-[#FEBB0C]"
                  : null
              } `}
            ></span>
            {date.status}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
          {date.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-black uppercase">
              #{date.id}
            </span>
            <span
              className={`text-[10px] font-bold ${
                date.priority === "High"
                  ? "text-red-500"
                  : date.priority === "Medium"
                  ? " text-[#FEBB0C]"
                  : "text-green-500"
              } uppercase`}
            >
              {date.priority}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>{date.customer}</span>
            <span>
              <img className="w-3" src={d} alt="" />
            </span>
            <span>{date.createdAt.split("-").reverse().join("/")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;