import React, { useState } from "react";
import Slider from "./Slider";

function MainContent(props) {
  const {
    initial,
    decrement,
    increment,
    handleSliderChange,
  } = props;

  const [loanAmount, setLoanAmount] = useState("$" + initial);
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.startsWith("$")) {
      setLoanAmount(value); 
    } else {
      setLoanAmount("$" + value); 
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      const numericValue = parseFloat(loanAmount.replace("$", ""));
      handleSliderChange(numericValue);
    }
  };


  return (
    <div className="main-content-container px-2 mt-4 mx-auto items-center text-white border border-box border-none">
      <div className="main-left-content flex pt-10 w-max ml-8 border border-box border-none relative">
        <span className="font-normal text-lg">Loan Amount</span>

        <div
          style={{ backgroundColor: "#3A4360" }}
          className="input-box  text-base h-10  py-1 border font-normal border-box border-slate-700 rounded-md ml-48 text-white relative flex items-center"
        >
          <input
            type="text"
            placeholder=""
            value={loanAmount}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            className="text-white ml-2 placeholder-white bg-transparent border-none outline-none"
          />

          <div className="flex space-x-3 mr-2 text-[#95979c]">
            <button onClick={decrement}>&#9660;</button>
            <button onClick={increment}>&#9650;</button>
          </div>
        </div>
      </div>
      <Slider value={initial} onSliderChange={handleSliderChange} />
    </div>
  );
}

export default MainContent;

