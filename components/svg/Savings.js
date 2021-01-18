import React from "react";

const Savings = ({ width = "21", height = "20", color = "#C2CFE0" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.51039 4.03301H17.5729C17.6493 4.03301 17.7097 4.09735 17.7097 4.16634V15.833C17.7097 15.902 17.6493 15.9663 17.5729 15.9663H2.51039C2.434 15.9663 2.37358 15.902 2.37358 15.833V4.16634C2.37358 4.09735 2.434 4.03301 2.51039 4.03301Z"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="6.5271"
        y="3.33301"
        width="1.17153"
        height="13.3333"
        fill={color}
      />
      <rect
        x="12.3847"
        y="3.33301"
        width="1.17153"
        height="13.3333"
        fill={color}
      />
    </svg>
  );
};

export default Savings;
