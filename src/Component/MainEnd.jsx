import React, { useState } from "react";
import SliderLoan from "./SliderLoan";
import Radio from "@mui/material/Radio";
import MainEndYear from "./MainEndYear";

function MainEnd(props) {
  const {
    handleChange,
    initial,
    increment,
    decrement,
    handleSliderChange,
    selectedValue,
  } = props;


  //   const [initial, setInitial] = useState(12);

  //   const handleSliderChange = (newValue) => {
  //     setInitial(newValue);
  //   };

  //   function decrement() {
  //     if (selectedValue === "b"  && initial > 1) {
  //       setInitial(initial - 1);
  //     }
  //  else if (initial > 12) {
  //       setInitial(initial - 12);
  //     }
  //   }

  //   function increment() {
  //     if (selectedValue === "b") {
  //       setInitial(initial + 1);
  //     } else setInitial(initial + 12);
  //   }

  //   const [selectedValue, setSelectedValue] = React.useState("a");

  //   const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  //     if (event.target.value === "b") {
  //       setInitial(1);
  //     } else {
  //       setInitial(12);
  //     }
  //   };

  return (
    <div className="main-content-container px-2 items-center text-white border border-box border-none">
      <div className="main-left-content flex pt-10 items-center w-max ml-8 border border-box border-none relative">
        <span className="font-normal text-lg"> Loan Term </span>

        <div>
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            sx={{
              color: "primary.main",
              "&.Mui-checked": {},
              "&:hover": {
                borderColor: "white",
              },
            }}
          />
          Month
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
            sx={{
              color: "primary.main",
            }}
          />
          Year
        </div>

        <div
          style={{ backgroundColor: "#3A4360" }}
          className=" input-box font-normal text-base h-10 border border-box border-slate-700 rounded-md ml-36 py-1 text-white flex"
        >
          <input
            type="text"
            placeholder=""
            value = {initial}
            
            className="text-white ml-2 placeholder-white bg-transparent border-b-2 outline-none border-none w-24 h-8"
          />
          <div className="flex space-x-4 mr-2 text-[#95979c]">
            <button onClick={decrement}>
              &#9660;
            </button>
            <button onClick={increment}>
              &#9650;
            </button>
          </div>
        </div>
      </div>
      {selectedValue === "a" && (
        <SliderLoan value={initial} onSliderChange={handleSliderChange} />
      )}
      {selectedValue === "b" && (
        <MainEndYear
          initial={initial}
          handleSliderChange={handleSliderChange}
        />
      )}
    </div>
  );
}
export default MainEnd;
