import React from 'react';
import Link from "next/link";
import Input from '../../components/Input'
import Button from '../../components/Button'
import Image from 'next/image';


const inputStyle = {
  border: '1px solid #000',
  borderRadius: '5px',
  height: '2rem',
  padding: '5px',
  outline: 'none',
  width: '301px',
  height: '64px'
};

const ParentSignup = () => {
  return (
    <div className="signup-page">
      <div className="logo">
        <Link href="/">
          <Image alt="edustripeLogo logo" src="/images/Edustripelogo.png" width="240" height="45" />
        </Link>
      </div>
      <p className="welcome-back">Create a free parent account</p>
      <div className="form-div">
        <form className="forms">
          <div className="input-div">
            <Input
              style={inputStyle}
              name="fullname"
              type="text"
              className="input"
              label="Fullname:"
              id="fullname"
            />
          </div>
          <div className="input-div">
            <Input
              style={inputStyle}
              name="email"
              type="email"
              className="input"
              label="Email:"
              id="email"
            />
          </div>
          <div className="input-div">
            <Input
              style={inputStyle}
              name="phone"
              type="phone"
              className="input"
              label="Phone number:"
              id="phone"
            />
          </div>
          <div className="input-div">
            <Input
              style={inputStyle}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
          </div>
            <Button
              label='Register'
              type='submit'
              id='submit'
              className="submit"
              style={{
                background: '#109CF1',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '5px',
                border: '1px solid #109CF1',
                outline: 'none',
                padding: '5px',
                fontSize: '24px',
                textAlign: 'center',
                alignItems: 'center',
                margin: '15px 0',
                width: '301px',
                height: '57px'
              }}
            />
        </form>
      </div>
      <div>
        <p className="txt">Already have an account? Click here to <Link href="/login">Sign in</Link></p>
        <p className="txt">Not a parent? Click here to <Link href="/studentSignup">Register</Link> as a school</p>
      </div>
    </div>
  );
}

export default ParentSignup;
