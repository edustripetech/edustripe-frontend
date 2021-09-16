import React from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
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

  const router = useRouter()
  const notify = () => toast("Wow so easy!");

  const handleSubmit = async (values) => {
    try {
      const { firstName, lastName, phoneNumber, email, password, confirmPassword } = values;
      axios.post('https://edustripe.herokuapp.com/api/v1/auth/sign-up', { firstName, lastName, email, phoneNumber, password, confirmPassword }).then(response => {
        if(response.data.status === 'success') {
          const { user, accessToken } = response.data.data;
          localStorage.setItem('user_token', accessToken)
          localStorage.setItem('firstname', user.firstName)
          localStorage.setItem('lastname', user.lastName)
          localStorage.setItem('email', user.email)
          notify
          router.push('/')
          return response.data.data;
        } else {
          return console.log('Error response', response);
        }
      }).catch(error => {
        console.log('err',error)
      });
    } catch (error) {
      if (error) {
        console.log(error.message);
        return error;
      }
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
                label="Last Name:"
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
              ]}
            >
              <Input
                style={inputStyle}
                name="phoneNumber"
                type="text"
                className="input"
                label="Phone number:"
                id="phoneNumber"
              />
            </Form.Item>
          </div>
          <div className="input-div">
          <Form.Item
              label="Password"
              name="password"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: 'Please input a password' },
              ]}
            >
            <Input
              style={inputStyle}
              name="password"
              type="password"
              className="input"
              label="Password:"
              id="password"
            />
            </Form.Item>
          </div>

          <div className="input-div">
          <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: 'Confirm your password' },
              ]}
            >
            <Input
              style={inputStyle}
              name="confirmPassword"
              type="password"
              className="input"
              label="Confirm Password;"
              id="confirmPassword"
            />
            </Form.Item>
          </div>
          <div className="input-div">
            <Form.Item type="submit">
            <Button
              onClick={handleSubmit}
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
        <p className="txt">Already have an account? Click here to <Link href="/login">Sign in</Link></p>
        <p className="txt">Not a parent? Click here to <Link href="/studentSignup">Register</Link> as a school</p>
      </div>
    </div>
  );
}

export default ParentSignup;
