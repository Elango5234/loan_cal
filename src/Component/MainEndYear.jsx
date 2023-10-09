import React, { useState } from "react";
import SliderLoanYear from "./SliderLoanYear";

function MainEndYear(props) {
  // const [initial, setInitial] = useState(1);

  // const handleSliderChange = (newValue) => {
  //   setInitial(newValue);
  // };

  // function decrement() {
  //   if (initial > 1) {
  //     console.log("pppp");
  //     setInitial(initial - 1);
  //   }
  // }

  // function increment() {
  //   if (initial < 40) {
  //     setInitial(initial + 1);
  //   }
  // }
  const { initial, handleSliderChange } = props;
  return (
    <>
      <SliderLoanYear value={initial} onSliderChange={handleSliderChange} />
    </>
  );
}
export default MainEndYear;
