import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Input, Button } from 'antd';
// import Button from '../../components/Button'
// import Input from '../../components/Input'
import Image from 'next/image';

const login = () => {
  const [errroMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(localStorage.user_token) {
        localStorage.clear();
      }
    }
  }, [])

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { email, password } = values;
      console.log('vals', email, password)
        const req = await axios.post('https://edustripe.herokuapp.com/api/v1/auth/sign-in', { email, password }).then(response => {
        console.log('request login', req)
        if(response.data.status === 'success') {
          setIsLoading(false)
          const { user, accessToken } = response.data.data;
          localStorage.setItem('user_token', accessToken)
          localStorage.setItem('firstname', user.firstName)
          localStorage.setItem('lastname', user.lastName)
          localStorage.setItem('email', user.email)
          router.push('/')
          return response.data.data;
        } else {
          return console.log('Error response', response);
        }
      }).catch(error => {
        setErrorMessage('Login failed, check your details and try again')
        setIsLoading(false)
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
              autoComplete='none'
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
            >{!isLoading ? 'Submit' : 'Loading...'}</Button>
            </Form.Item>
        </div>
        <div><p style={{color:'red'}} >{errroMessage}</p></div>
        </Form>
      </div>
      <div>
        <p className="txt">Don’t have an account? Click here to <Link href="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default login;
