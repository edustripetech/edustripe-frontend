import React from 'react';
import Link from "next/link";
import RightArrow from "../../components/svg/RightArrow.js";

const signup = () => {
  return (
    <div className="signup-div">
      <div className="logo">
        <Link href="/">
          <img alt="edustripeLogo logo" src="/images/Edustripelogo.png" width="240" height="45" />
        </Link>
      </div>
      <p className="welcome-back">Create a free account</p>
      <div className="input-div">
        <Link href="#">
          <div className="div">
            Teacher <RightArrow />
          </div>
        </Link>
        <Link href="/parentSignup">
          <div className="div">
            Parent <RightArrow />
          </div>
        </Link>
        <Link href="/studentSignup">
          <div className="div">
            School <RightArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default signup;
