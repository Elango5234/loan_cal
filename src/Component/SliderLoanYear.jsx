import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider"


const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label:"0"
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
];

function valuetext(value) {
  return value.toString();
}

export default function DiscreteLabel({value,onSliderChange}) {
  const handleChange = (value, newValue) => {
    onSliderChange(newValue);

  };

  return (
    <div className="ml-8 h-12 text-white font-md mt-10">
      <style>
        {`
          .MuiSlider-markLabel {
            color: gray; 
          }
          
        `}
      </style>
      <Box sx={{ width: 550 }}>
        <Slider
          aria-label="Always visible"
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          valueLabelDisplay="off"
          min={1}
          max={40}
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiSlider-rail": {
              backgroundColor: "rgb(22, 32, 54)",
              height: 14,
              borderRadius: 4,
            },
            "& .MuiSlider-track": {
              backgroundColor: "#3b9ed4",
              height: 14,
              borderRadius: 4,
            },
            '& .MuiSlider-thumb': {
              height: 26,
              width: 26,
              border:"7px solid white",
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          borderColor: 'white',
          boxShadow: '0 0 6px rgba(250, 250, 255, 0.8)',
        },
          }}
        }
        />
      </Box>
    </div>
  );
}
