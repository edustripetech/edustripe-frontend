import React from 'react';
import Link from "next/link";
import { Form, Input, Button } from 'antd';
import Image from 'next/image';


const inputStyle = {
  border: '1px solid #000',
  borderRadius: '5px',
  padding: '5px',
  outline: 'none',
  width: '301px',
  height: '40px'
};

const ParentSignup = () => {
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
    <div className="signup-page">
      <div className="logo">
        <Link href="/">
          <Image alt="edustripeLogo logo" src="/images/Edustripelogo.png" width="240" height="45" />
        </Link>
      </div>
      <p className="welcome-back">Create a free parent account</p>
      <div className="form-div">
        <Form onFinish={handleSubmit} layout="vertical" className="forms">
          <div className="input-div">
            <Form.Item
              name="firstName"
              label="First Name"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: 'Please input your first name' },
              ]}
            >
              <Input
                style={inputStyle}
                type="text"
                className="input"
                id="firstName"
              />
            </Form.Item>
          </div>
          <div className="input-div">
            <Form.Item
              name="lastName"
              validateTrigger={['onChange', 'onBlur']}
              label="Last Name"
              rules={[
                { required: true, message: 'Please input your last name' },
              ]}
            >
              <Input
                style={inputStyle}
                name="lastName"
                type="text"
                className="input"
                label="First Name:"
                id="lastName"
              />
            </Form.Item>
          </div>
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
                style={inputStyle}
                name="email"
                type="email"
                className="input"
                label="Email:"
                id="email"
              />
            </Form.Item>
          </div>
          <div className="input-div">
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: 'Please input an email' },
                { type: 'phone', message: 'Please input a valid email' }
              ]}
            >
              <Input
                style={inputStyle}
                name="phone"
                type="phone"
                className="input"
                label="Phone number:"
                id="phoneNumber"
              />
            </Form.Item>
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
                fontSize: '16px',
                textAlign: 'center',
                alignItems: 'center',
                margin: '15px 0',
                width: '301px',
                height: '44px'
              }}
            />
        </Form>
      </div>
      <div>
        <p className="txt">Already have an account? Click here to <Link href="/login">Sign in</Link></p>
        <p className="txt">Not a parent? Click here to <Link href="/studentSignup">Register</Link> as a school</p>
      </div>
    </div>
  );
}

export default ParentSignup;
