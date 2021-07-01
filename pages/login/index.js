import React from 'react';
import Link from "next/link";
import axios from 'axios';
import { Form, Input, Button } from 'antd';
// import Button from '../../components/Button'
// import Input from '../../components/Input'
import Image from 'next/image';

const login = () => {
  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const request = await axios.post(`${process.env.API_URL}auth/sign-in`, { email, password });
      console.log({ request });
    } catch (error) {
      return error;
    }
  }
  return (
    <div className="login-page">
      <div className="logo">
        <Link href="/">
          <Image alt="edustripeLogo logo" src="/images/Edustripelogo.png" width="240" height="45" />
        </Link>
      </div>
      <p className="welcome-back">Welcome back</p>
      <div className="form-div">
        <Form onFinish={handleSubmit} layout="vertical" className="forms">
          <div className="input-div">
            <Form.Item
            label="Email"
            name="email"
            validateTrigger={['onChange', 'onBlur']}
            rules={[
              { required: true, message: 'Please input an email' },
              { type: 'email', message: 'Please input a valid email' }
            ]}
            >
            <Input
              type="email"
              style={{
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '301px',
                height: '40px'
              }}
              className="input"
              label="Email:"
              id="email"
            />
            </Form.Item>
          </div>
          <div className="input-div">
            <Form.Item
            label="Password"
              name="password"
              type="password"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: 'Password is required' }
              ]}
            >
          <Input
              style={{
                borderRadius: '5px',
                height: '2rem',
                padding: '5px',
                outline: 'none',
                width: '301px',
                height: '40px'
              }}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
            </Form.Item>
          </div>
          <div className="input-div">
            <Form.Item type="submit">
            <Button
            htmlType="submit"
              type='primary'
              id='submit'
              style={{
                cursor: 'pointer',
                borderRadius: '5px',
                outline: 'none',
                padding: '5px',
                fontSize: '16px',
                textAlign: 'center',
                alignItems: 'center',
                margin: '10px 0',
                width: '301px',
                height: '50px'
              }}
            >Submit</Button>
            </Form.Item>
        </div>
        </Form>
      </div>
      <div>
        <p className="txt">Don’t have an account? Click here to <Link href="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default login;
