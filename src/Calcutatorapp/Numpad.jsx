import React from "react";

const Numpad = ({value,setvalue}) => {
  function handler(event){
    const flag = value + event.target.innerHTML
    setvalue(flag)
    
  }

  function equal()
  {
    setvalue(eval(value))
  }
  function clear(){
    setvalue("")
  }

  return (
    <div className=" grid grid-cols-4 justify-items-center mt-4 gap-y-4  ">
      <button
      onClick={handler}
        className="  h-13 w-13 shadow-lg shadow-cyan-500/50   hover:bg-cyan-500/50 rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        value={value}
      >
        +
      </button>
      <button
      
        className="h-13 w-13 shadow-lg shadow-amber-500/50 hover:bg-amber-500/50 rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        -
      </button>
      <button
      
        className="h-13 w-13 shadow-lg shadow-emerald-300 hover:bg-emerald-300 rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        *
      </button>
      <button
      onClick={handler}
        className="h-13 w-13 shadow-lg shadow-blue-100 hover:bg-blue-100 rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        value={value}
      >
        /
      </button>
      <button
      onClick={handler}
        className="  h-13 w-13  shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        value={value}
      >
        1
      </button>
      <button
        className="h-13 w-13  shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        2
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        3
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        4
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        5
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        6
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        7
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        8
      </button>
      <button
        className="h-13 w-13 shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        9
      </button>
      <button
        className="h-13 w-13  shadow-lg shadow-white rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={handler}
        value={value}
      >
        0
      </button>
      <button
        className="h-13 w-13 shadow-lg  hover:bg-green-700 shadow-green-500 rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={equal}
        
      >
        =
      </button>
      <button
        className="h-13 w-13 shadow-lg hover:bg-red-700 shadow-red-500  rounded-2xl font-bold text-3xl bg-gray-500 text-white "
        type="button"
        onClick={clear}
        
      >
        C
      </button>
    </div>
  );
};

export default Numpad;
