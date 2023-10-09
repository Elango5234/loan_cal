import React from "react";
import PieChart from "./PieChart";
import "./style.css";

function RightContent(props) {
  const { initial, interest, emiResult, interestInitial, monthValue } = props;

  const totalPayment = initial + parseFloat(emiResult?.totalInterestPaid);

  return (
    <div className="border border-box border-none text-white">
      <div className="font-base text-2xl ml-10 mt-6 text-white">
        <h5>Break-up of Total payment</h5>
      </div>

      <div className="flex items-center mt-8 mb-16 ml-6">
        <div className="w-[50%] piechart">
          <PieChart
            interestInitial={interestInitial}
            monthValue={monthValue}
          />
        </div>

        <div className="flex flex-col w-[50%] -mb-8 ml-2">
          <div className="right-content mb-6 ml-24">
            <p className="text-lg font-normal relative mb-3 text-gray-400">
              <span className="pie-icon"></span>
              {"Principal Amount"}
            </p>
            <span className="text-lg font-medium text-gray-200 text-center">
              <h4>
                {"$" +
                  initial.toLocaleString("en-IN", {
                    currency: "INR",
                  })}
              </h4>
            </span>
          </div>

          <div className="right-content mb-8 ml-20 text-center">
            <p className="text-center text-lg mb-3 font-normal text-gray-400">
              <span className="pie-icon2"></span>
              {"Total Interest"}
            </p>

            <span className="text-lg font-medium text-gray-200 text-center">
              <h4>
                {"$"}
                {isNaN(parseFloat(emiResult?.totalInterestPaid))
                  ? 0
                  : parseFloat(emiResult?.totalInterestPaid).toLocaleString(
                      "en-IN",
                      {
                        currency: "INR",
                      }
                    )}
              </h4>
            </span>
          </div>

          <div className="right-content ml-24 text-center">
            <p className="text-center text-lg  font-normal text-gray-400">
              {"Total Payment"}
            </p>
            <span className="text-center text-base font-normal text-gray-400">
              {"(Principal + Interest)"}
            </span>
            <div className="mt-4">
              <span className="text-lg font-medium text-gray-200 text-center">
                <h4>
                  {"$" +
                    (isNaN(totalPayment)
                      ? initial.toLocaleString("en-IN", { currency: "INR" })
                      : totalPayment.toLocaleString("en-IN", {
                          currency: "INR",
                        }))}
                </h4>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-2xl text-gray-400 mb-6 text-center">
        <p> Your Monthly Payment </p>
        <div className="mt-4">
          <span className="text-gray-200 text-3xl font-medium text-center">
            {"$"}
            {/* { `${emiResult?.emi || "0"}`} */}
            {isNaN(emiResult?.emi)
              ? Math.round(initial / 12).toLocaleString("en-IN", {
                  currency: "INR",
                })
              : Number(emiResult?.emi).toLocaleString("en-IN", {
                  currency: "INR",
                })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
