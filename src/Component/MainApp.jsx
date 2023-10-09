import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import MainContentCenter from "./MainContentCenter";
import MainEnd from "./MainEnd";
import RightContent from "./RightContent";
import Divider from "@mui/material/Divider";
import DateContent from "./DateContent";

function calculateEMIAndInterest(
  principal,
  annualInterestRate,
  loanTenureInYears
) {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalNumberOfPayments = loanTenureInYears * 12;

  const emi =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalNumberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);

  const totalInterestPaid = emi * totalNumberOfPayments - principal;

  return {
    emi: emi.toFixed(0),
    totalInterestPaid: totalInterestPaid.toFixed(0),
  };
}

function MainApp() {
  const [initial, setInitial] = useState(1000);
  const [interestInitial, setInterestInitial] = useState(0);
  const [interest, setInterest] = useState(0);
  const [emiResult, setEmiResult] = useState(0);

  const [monthInitial, setMonthInitial] = useState(12);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const [monthValue, setMonthValue] = useState(1);

  const monthHandleSliderChange = (newValue) => {
    setMonthInitial(newValue);

    if (selectedValue === "a") {
      setMonthValue(newValue / 12);
    } else {
      setMonthValue(newValue);
    }
    const result = calculateEMIAndInterest(
      initial,
      interestInitial,
      selectedValue === "a" ? newValue / 12 : newValue // ternary
    );
    // console.log(newValue, "pp");
    setEmiResult(result);
  };

  function monthDecrement() {
    if (selectedValue === "b" && monthInitial > 1) {
      setMonthInitial(monthInitial - 1);
    } else if (monthInitial > 12) {
      setMonthInitial(monthInitial - 12);
    }

    const result = calculateEMIAndInterest(
      initial,
      interestInitial,
      selectedValue == "b" ? monthInitial - 1 : (monthInitial - 12) / 12
    );
    setEmiResult(result);
  }

  function monthIncrement() {
    if (selectedValue === "b" && monthInitial < 40) {
      setMonthInitial(monthInitial + 1);
    } else if (selectedValue === "a" && monthInitial < 480) {
      setMonthInitial(monthInitial + 12);
    }
    const result = calculateEMIAndInterest(
      initial,
      interestInitial,
      selectedValue == "b" ? monthInitial + 1 : (monthInitial + 12) / 12
    );
    setEmiResult(result);
  }

  const monthHandleChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "b") {
      setMonthInitial(monthInitial / 12);
      // setMonthValue(monthInitial);
    } else {
      // setMonthValue(monthInitial / 12);
      setMonthInitial(monthInitial * 12);
    }
    const result = calculateEMIAndInterest(
      initial,
      interestInitial,
      selectedValue === "a" ? monthInitial / 12 : monthInitial
      // monthInitial
    );
    setEmiResult(result);
  };

  const handleSliderChange = (newValue) => {
    setInitial(newValue);
    const result = calculateEMIAndInterest(
      newValue,
      interestInitial,
      monthValue
    );
    setEmiResult(result);
  };

  function decrement() {
    if (initial > 0 && initial > 1000) {
      setInitial(initial - 10000);
      const result = calculateEMIAndInterest(
        `${initial - 10000}`,
        interestInitial,
        monthValue
      );
      setEmiResult(result);
    }
  }

  function increment() {
    setInitial(initial + 10000);
    const result = calculateEMIAndInterest(
      `${initial + 10000}`,
      interestInitial,
      monthValue
    );
    setEmiResult(result);
  }

  const interestHandleSliderChange = (newValue) => {
    setInterestInitial(newValue);
    const result = calculateEMIAndInterest(initial, newValue, monthValue);
    setEmiResult(result);
  };

  function interestDecrement() {
    if (interestInitial > 0) {
      setInterestInitial(interestInitial - 0.25);
    }
    const result = calculateEMIAndInterest(
      initial,
      `${interestInitial - 0.25}`,
      monthValue
    );
    setEmiResult(result);
  }

  function interestIncrement() {
    if (interestInitial < 20) {
      setInterestInitial(interestInitial + 0.25);
    }
    const result = calculateEMIAndInterest(
      initial,
      `${interestInitial + 0.25}`,
      monthValue
    );
    setEmiResult(result);
  }

  const handleInput = (event) => {
    setInitial(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      // Update the initial value with the new value in the state
      handleSliderChange(Number(initial));
    }
  };
  return (
    <div style={{ backgroundColor: "#162036" }} className="main-page">
      <Header />
      <div
        style={{ background: "#27304c" }}
        className="flex mx-10 mt-10 h-auto"
      >
        <div className="left ">
          <div className=" flex flex-col gap-1 w-[55%] ml-4">
            <MainContent
              initial={initial}
              decrement={decrement}
              increment={increment}
              handleSliderChange={handleSliderChange}
              handleInput={handleInput}
              handleInputKeyPress={handleInputKeyPress}
            />

            <MainContentCenter
              interestInitial={interestInitial}
              interestDecrement={interestDecrement}
              interestIncrement={interestIncrement}
              interestHandleSliderChange={interestHandleSliderChange}
            />

            <MainEnd
              initial={monthInitial}
              decrement={monthDecrement}
              increment={monthIncrement}
              handleSliderChange={monthHandleSliderChange}
              handleChange={monthHandleChange}
              selectedValue={selectedValue}
            />
          </div>
        </div>

        <div className="flex items-center ml-6 mb-10">
          <Divider className="p-[0.03rem] h-[500px] bg-slate-600" />
        </div>

        <div className="right h-auto w-[47%] mt-4">
          <RightContent
            initial={initial}
            interest={interest}
            emiResult={emiResult}
            interestInitial={interestInitial}
            monthValue={monthValue}
          />
        </div>
      </div>
      <div className="h-auto">
        <div className="">
          <DateContent />
        </div>
      </div>

      <div>E</div>
    </div>
  );
}

export default MainApp;
