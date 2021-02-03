import React from 'react';
import { Sidebar, Navbar } from "../../components";
import Trash from "../../components/svg/Trash";
import Filter from "../../components/svg/Filter";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Layout, Form, Button, Input, Checkbox, Avatar, Table } from 'antd';

const { Header, Content, Sider } = Layout;

const applyPersonalDetails = () => {
  const route = useRouter();

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date Paid',
      dataIndex: 'datePaid',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const dataSource = [
    {
      key: '1',
      date: '23 Apr, 2018',
      amount: '₦300,000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '-',
      status: 'Not Paid'
    },
    {
      key: '2',
      date: '23 Apr, 2018',
      amount: '₦300,000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '-',
      status: 'Pending acceptance'
    },
    {
      key: '3',
      date: '23 Apr, 2018',
      amount: '₦300,000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '30 Jun 2019',
      status: 'Paid'
    },
    {
      key: '3',
      date: '23 Apr, 2018',
      amount: '₦300,000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '30 Jun 2019',
      status: 'Paid'
    },
  ];

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar page="Loans" menu={route.pathname} />  
      </Header>

      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          
        <div
            style={{
            width: '1042px',
            height: '468px',
            background: '#fff',
            padding: '20px',
            marginBottom: '45px',
            borderRadius: '5px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
          }}
          >
            <h1>Personal Details</h1>
            <Form style={{marginTop: '10px',}}>
              <div style={{display: 'flex', alignItems: 'center', }}>
              <Form.Item  labelCol={{ span: 24 }} label="Name" style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              </div>
              <div style={{display: 'flex', alignItems: 'center' }}>
              <Form.Item labelCol={{ span: 24 }} label="Phone no." style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              <Form.Item  labelCol={{ span: 24 }} label="Email Address" style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='email' />
              </Form.Item>
              </div>
              <div style={{display: 'flex', alignItems: 'center', }}>
              <Form.Item  labelCol={{ span: 24 }} label="Date Of Birth" style={{margin: '0',  marginRight: '65px', width: '270px'}}>
                <Input style={{height: '40px', width: '270px'}} type='email' />
              </Form.Item>
              <Form.Item  labelCol={{ span: 24 }} label="Marital Status" style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='text' />
              </Form.Item>
              </div>
              <div style={{display: 'flex', alignItems: 'center', }}>
              <Form.Item  labelCol={{ span: 24 }} label="Education" style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='email' />
              </Form.Item>
              <Form.Item  labelCol={{ span: 24 }} label="Gender" style={{margin: '0'}}>
                <Input style={{height: '40px', width: '270px'}} type='tel' />
              </Form.Item>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type='submit' style={{color: '#fff', background: '#C2CFE0', borderRadius: '3px', width: '193px', height: '38px', marginTop: '20px' }}>
              Back
            </Button>
            <Button type='submit' style={{color: '#fff', background: '#007EFF', borderRadius: '3px', width: '193px', height: '38px', marginTop: '20px' }}>
              Next
            </Button>
            </div>
            </Form>
          </div>

        </Content>
      </Layout>
    </Layout>
  );
}
 
export default applyPersonalDetails;
