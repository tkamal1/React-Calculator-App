import React from "react";

const Display = ({ value }) => {
  return (
    <input
      type="text"
      placeholder="0"
      className="  ml-10  rounded mt-2 h-12 w-80 bg-gray-200 
      font-bold text-2xl text-gray-800 text-right focus:outline-none 
      
      "
      value={value}
    >
      {/* <h1 className=' font-bold text-2xl text-gray-800 content-center'>{value}</h1> */}
    </input>
  );
};

export default Display;
