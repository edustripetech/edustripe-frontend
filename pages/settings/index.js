import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Sidebar, Navbar } from "../../components";
import Trash from "../../components/svg/Trash";
import { useRouter } from "next/router";
import { Layout, Form, Button, Input, Checkbox, Avatar } from 'antd';

const { Header, Content, Sider } = Layout;

const Settings = () => {
  const route = useRouter();

  useEffect(() => {
    async function loadProfile() {
      await fetchProfile()
    }
    loadProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      console.log('hereee')
      const req = await axios.get('https://edustripe.herokuapp.com/api/v1/users/profile').then(response => {
        console.log('ress', response)
        console.log('reqq', req)
        // if(response.data.status === 'success') {
        //   setIsLoading(false)
        //   // localStorage.setItem('user_token', accessToken)
        //   // localStorage.setItem('firstname', user.firstName)
        //   // localStorage.setItem('lastname', user.lastName)
        //   // localStorage.setItem('email', user.email)
        //   // return response.data.data;
        // } else {
        //   return console.log('Error response', response);
        // }
      }).catch(error => {
        // setErrorMessage('Signup failed, check your details and try again')
        // setIsLoading(false)
        console.log('err',error)
      });
    } catch (error) {
      console.log('>error>',error);

      return error;
    }
  }

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar page="Settings" menu={route.pathname} />
      </Header>
      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <div
          className="settings-div"
            style={{
            width: '1042px',
            height: '515px',
            background: '#fff',
            padding: '20px',
            marginBottom: '45px',
            borderRadius: '5px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)'
          }}
          >
            <h1>Profile Details</h1>
            <div className='profile-div' style={{display: 'flex', alignItems: 'center'}}>
              <div className='profile-action' >
                <Avatar size={60}>
                  A
                </Avatar>
                <Button
                style={{
                  margin: '0 20px',
                  width:'193px',
                  height:'38px',
                  color: '#fff',
                  background: '#007EFF',
                  borderRadius: '3px'
                }}
                >Upload New Picture</Button>
              </div>
              <p className='delete-p' style={{color: '#109CF1'}}><Trash/> Delete</p>
            </div>
            <Form style={{marginTop: '15px'}}>
              {/* <div style={{display: 'flex', alignItems: 'center'}}>
              <Form.Item  labelCol={{ span: 24 }} label="First Name">
                <Input style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              <Form.Item  labelCol={{ span: 24 }} label="Last Name">
                <Input style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              </div> */}
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
              <Form.Item className='form-input' style={{width: '270px', marginRight: '35px'}} labelCol={{ span: 24 }} label="First Name">
                <Input className='input' style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              <Form.Item  className='form-input' labelCol={{ span: 24 }} label="Last Name">
                <Input className='input' style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
              <Form.Item  className='form-input' labelCol={{ span: 24 }} label="Email">
                <Input className='input' style={{height: '40px', width: '270px'}} type='email' />
              </Form.Item>
              <Form.Item className='form-input' labelCol={{ span: 24 }} label="Phone Number">
                <Input className='input' style={{height: '40px', width: '270px'}} type='tel' />
              </Form.Item>
              </div>
              <Form.Item className='form-input' labelCol={{ span: 24 }} label="Location">
                <Input className='input' style={{height: '40px', width: '574px'}} type='text' />
              </Form.Item>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type='submit' className='input' style={{color: '#fff', background: '#007EFF', borderRadius: '3px', width: '193px', height: '38px', marginTop: '20px' }}>
              Save Changes
            </Button>
            </div>
            </Form>
          </div>
          <div
          className='settings-2-div'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '1042px',
            }}
           >
            <div
            className="password-div"
            style={{
              width: '352px',
              height: '422px',
              background: '#fff',
              padding: '20px',
              marginRight: '5px',
              borderRadius: '5px',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)'
            }}
            >
              <h1 style={{marginBottom: '10px'}}>Change Password</h1>
              <Form layout='horizontal' >
              <Form.Item  labelCol={{ span: 24 }} label="Current Password">
                <Input style={{height: '40px', width: '270px'}} type='password' placeholder="* * * * * * *" />
              </Form.Item>
              <Form.Item  labelCol={{ span: 24 }}label="New Password">
                <Input style={{height: '40px', width: '270px'}} type='password' placeholder="* * * * * * *"  />
              </Form.Item>
              <Form.Item labelCol={{ span: 24 }} label="Confirm New Password">
                <Input style={{height: '40px', width: '270px'}} type='password' placeholder="* * * * * * *"  />
              </Form.Item>
              <Button type='submit' style={{color: '#fff', background: '#007EFF', borderRadius: '3px', width: '193px', height: '38px'}}>
              Update Passaword
            </Button>
            </Form>
            </div>
            <div
            className='notifications-div'
            style={{
              width: '652px',
              height: '422px',
              background: '#fff',
              padding: '20px',
              marginLeft: '5px',
              borderRadius: '5px',
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)'
            }}
            >
              <h1>
              Notifications
              </h1>
              <Form>
                <div style={{padding: '5px 0'}}>
                <p>Email me about</p>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Every new event/activity.</Checkbox>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Deadlines time running out.</Checkbox>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Results are out.</Checkbox>
                </div>
                <div style={{padding: '10px 0'}} >
                <p>Send me sms about</p>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Every new event/activity.</Checkbox>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Deadlines time running out.</Checkbox>
                </div>
                <div style={{padding: '5px 0'}}>
                <Checkbox>Results are out.</Checkbox>
                </div>
                <Button type='submit' style={{color: '#fff', background: '#007EFF', borderRadius: '3px', width: '193px', height: '38px', marginTop: '20px' }}>
              Save Changes
            </Button>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // write fetch operations here
  return {
    props: {}, 
  }
}

export default Settings;
