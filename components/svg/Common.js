import React from 'react'

const ArrowRightUp = ({ width="13", height="14", color="#E6CB0D" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.79163 9.91634L9.20829 4.08301" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.79163 4.08301H9.20829V9.91634" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}
 
export {ArrowRightUp};