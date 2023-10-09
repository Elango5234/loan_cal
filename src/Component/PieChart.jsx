// import React, { useRef, useEffect } from "react";
// import { Chart } from "chart.js/auto";

// function PieChart() {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const myChartRef = chartRef.current.getContext("2d");

//     chartInstance.current = new Chart(myChartRef, {
//       type: "doughnut",
//       data: {
//         datasets: [
//           {
//             label: "",
//             data: [300, 50],
//             backgroundColor: [
//               "rgb(255, 255, 255)", // Fill color with opacity
//             ],
//             backgroundColor:[
//               "gray"
//             ],
//             borderColor: ["rgb(22, 32, 54)"],

//             borderWidth: [7],
//           },
//         ],
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
//     </div>
//   );
// }

// export default PieChart;

import React from "react";
import { PieChart, Pie, Sector } from "recharts";

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius - 1}
      outerRadius={outerRadius + 1}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      strokeWidth={200}
    />
  );
};

const DtkDoughnut = ({ interestInitial, monthValue }) => {
  const data = [
    { value: interestInitial + monthValue, fill: "url(#orangeGradient)" },
    { value: 30, fill: "url(#blueGradient)" },
  ];
  return (
    <PieChart width={300} height={290}>
      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3AC8DC" />
          <stop offset="100%" stopColor="#5B6BC0" />
        </linearGradient>

        <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="1%" stopColor="#F3A55B" />
          <stop offset="300%" stopColor="#FB6589" />
        </linearGradient>
      </defs>

      <Pie
        activeIndex={0}
        activeShape={renderActiveShape}
        data={data}
        cx={170}
        cy={165}
        innerRadius={65}
        outerRadius={110}
        fill={"#8884d8"}
        startAngle={-190}
        endAngle={360}
        dataKey={"value"}
        strokeWidth={6}
        stroke={"rgb(22, 32, 54)"}
      ></Pie>
    </PieChart>
  );
};

export default DtkDoughnut;
