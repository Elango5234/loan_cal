import { useState } from "react";
import SliderInterest from "./SliderInterest";

function MainContentCenter(props) {
  const { interestInitial, interestDecrement, interestIncrement, interestHandleSliderChange } = props;
  // const [initial, setInitial] = useState(0);
  // const [interest, setInterest] =useState(initial);

  // const handleSliderChange = (newValue) => {
  //   setInitial(newValue);
  // };

  // function decrement() {
  //   if (initial > 0) {
  //     setInitial(initial - 0.25);
  //   }
  // }

  // function increment() {
  //   setInitial(initial + 0.25);
  //   // setInterest(initial*)
  // }

  return (
    <div className="main-content-container px-2  mx-auto items-center  text-white border border-box border-hidden">
      <div className="main-left-content flex  pt-10 ml-8 border border-box border-none relative">
        <span className="font-normal text-lg">Interest Rate</span>
        <div
          style={{ backgroundColor: "#3A4360" }}
          className=" input-box text-base h-10  font-normal border border-box rounded-md ml-60 py-1 border-slate-700 text-white relative flex items-center"
        >
          <input
            type="text"
            placeholder=""
            value = {interestInitial + "%"}
            className="text-white ml-2 placeholder-white bg-transparent border-none outline-none w-36 h-8"
          />
          <div className="flex space-x-4 mr-2 text-[#95979c]">
            <button onClick={interestDecrement}>
              &#9660;
            </button>
            <button onClick={interestIncrement}>
              &#9650;
            </button>
          </div>
        </div>
      </div>
      <SliderInterest value={interestInitial} onSliderChange={interestHandleSliderChange} />
    </div>
  );
}
export default MainContentCenter;
{/* <div className="main-content-container px-2  mx-auto items-center  text-white border border-box border-hidden">
<div className="main-lef border-none relative">
  <span className="font-normal text-lg">Interest Rate</span>
  <div
    style={{ backgroundColor: "#3A4360" }}
    className=" input-box text-base h-[100%]  ml-auto mr-8 w-[30%] justify-around font-normal border border-box rounded-md border-slate-700 text-white relative flex items-center"
  >
    <input
      type="text"
      placeholder=""
      value={interestInitial + "%"}
      className="text-white w-[100%] placeholder-white bg-transparent py-2 border-r border-slate-600"
    />t-content flex w-[100%] pt-10 ml-8 border border-box */}
