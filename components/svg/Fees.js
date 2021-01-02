import React from 'react';

const Fees = ({ width="21", height="20", color="#C2CFE0" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.2 2.5H2.59997C1.64664 2.5 0.866638 3.23333 0.866638 4.15V15.8333C0.866638 16.75 1.64664 17.5 2.59997 17.5H18.2C19.1533 17.5 19.9333 16.75 19.9333 15.8333V4.15C19.9333 3.23333 19.1533 2.5 18.2 2.5ZM9.5333 9.16667H16.4666V14.1667H9.5333V9.16667ZM11.2666 12.5H14.7333V10.8333H11.2666V12.5ZM2.59997 15.85H18.2V4.14167H2.59997V15.85Z" fill={color} />
    </svg>
  );
}
 
export default Fees;
