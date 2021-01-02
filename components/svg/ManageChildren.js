import React from 'react';

const Fees = ({ width="21", height="20", color="#C2CFE0" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
      <g clipPath="url(#clip1)">
        <path d="M14.2257 17.5V15.8333C14.2257 14.9493 13.873 14.1014 13.2453 13.4763C12.6176 12.8512 11.7662 12.5 10.8785 12.5H4.18401C3.29628 12.5 2.4449 12.8512 1.81717 13.4763C1.18944 14.1014 0.836792 14.9493 0.836792 15.8333V17.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.53124 9.16667C9.37986 9.16667 10.8785 7.67428 10.8785 5.83333C10.8785 3.99238 9.37986 2.5 7.53124 2.5C5.68262 2.5 4.18402 3.99238 4.18402 5.83333C4.18402 7.67428 5.68262 9.16667 7.53124 9.16667Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.2465 17.5001V15.8334C19.2459 15.0948 18.9991 14.3774 18.5447 13.7937C18.0903 13.2099 17.4542 12.793 16.7361 12.6084" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3889 2.6084C14.1089 2.79198 14.7471 3.20898 15.2028 3.79366C15.6585 4.37833 15.9059 5.09742 15.9059 5.83757C15.9059 6.57771 15.6585 7.2968 15.2028 7.88147C14.7471 8.46615 14.1089 8.88315 13.3889 9.06673" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip1">
          <rect width="20.0833" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
 
export default Fees;
