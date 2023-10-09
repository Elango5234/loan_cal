import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100000,
    label: "100k",
  },
  {
    value: 200000,
    label: "200k",
  },
  {
    value: 300000,
    label: "300k",
  },
  {
    value: 400000,
    label: "400k",
  },
  {
    value: 500000,
    label: "500k",
  },
];

function valuetext(value) {
  return value.toString();
}

export default function DiscreteSliderLabel({ value, onSliderChange }) {
  const handleChange = (event, newValue) => {
    onSliderChange(newValue);
  };

  return (
    <div className="ml-8 h-12 text-white font-md mt-10">
      <Box sx={{ width: 550 }}>
        <Slider
          aria-label="Always visible"
          getAriaValueText={valuetext}
          step={10000}
          marks={marks}
          valueLabelDisplay="off"
          min={0}
          max={500000}
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
            "& .MuiSlider-thumb": {
              height: 26,
              width: 26,
              border: "7px solid white",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                borderColor: "white",
                boxShadow: "0 0 6px rgba(250, 250, 255, 0.8)",
              },
            },
          }}
        />
      </Box>
    </div>
  );
}
