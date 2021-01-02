import React from 'react';

const Loan = ({ width="21", height="20", color="#C2CFE0" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M10.0417 0.833008V19.1663" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.2257 4.16699H7.94963C7.17286 4.16699 6.4279 4.47428 5.87864 5.02126C5.32938 5.56825 5.02081 6.31011 5.02081 7.08366C5.02081 7.85721 5.32938 8.59907 5.87864 9.14605C6.4279 9.69304 7.17286 10.0003 7.94963 10.0003H12.1337C12.9104 10.0003 13.6554 10.3076 14.2046 10.8546C14.7539 11.4016 15.0625 12.1434 15.0625 12.917C15.0625 13.6905 14.7539 14.4324 14.2046 14.9794C13.6554 15.5264 12.9104 15.8337 12.1337 15.8337H5.02081" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20.0833" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
 
export default Loan;
