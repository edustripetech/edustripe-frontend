import React from 'react';
import Link from "next/link";
import Button from '../../components/Button'
import Input from '../../components/Input'
import Image from 'next/image';

const login = () => {
  return (
    <div className="login-page">
      <div className="logo">
        <Link href="/">
          <Image alt="edustripeLogo logo" src="/images/Edustripelogo.png" width="240" height="45" />
        </Link>
      </div>
      <p className="welcome-back">Welcome back</p>
      <div className="form-div">
        <form className="forms">
          <div className="input-div">
            <Input
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '301px',
                height: '64px'
              }}
              name="email"
              type="email"
              className="input"
              label="Email:"
              id="email"
            />
          </div>
          <div className="input-div">
          <Input
              style={{
                border: '1px solid #000',
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '301px',
                height: '64px'
              }}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
          </div>
          <div>
            <Button
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
        </div>
        </form>
      </div>
      <div>
        <p className="txt">Don’t have an account? Click here to <Link href="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default login;
