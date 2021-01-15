import React from 'react';
import { Sidebar, Navbar } from "../components";
import { useRouter } from "next/router";
import { Layout, Form, Button, Input,Checkbox } from 'antd';

const { Header, Content, Sider } = Layout;

const Settings = () => {
  const route = useRouter();

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar menu={route.pathname} />
      </Header>

      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <div
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
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '1042px',
            }}
           >
            <div
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
