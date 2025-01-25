import React, { useState } from "react";
import Display from "./Display";
import Numpad from "./Numpad";
import Header from './Header'
const Calculator = () => {
  const [value , setValue] = useState("")
  return (
    <div className=" flex flex-col shadow-lg shadow-black justify-items-center rounded bg-gray-700 h-105 w-100">
      <Header />
      <Display value={value}/>
      <Numpad value={value} setvalue={setValue}/>
    </div>
  );
};

export default Calculator;
