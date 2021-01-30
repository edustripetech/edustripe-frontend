import React from 'react';
import { Sidebar, Navbar } from "../components";
import Trash from "../components/svg/Trash";
import { useRouter } from "next/router";
import { Layout, Form, Button, Input, Checkbox, Avatar } from 'antd';

const { Header, Content, Sider } = Layout;

const Loans = () => {
  const route = useRouter();

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar page="Loans" menu={route.pathname} />  
      </Header>

      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0 10px 0'}}>
            <div style={{background: '#fff', width: '491px', height: '131px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: '5px'}}>
            <div style={{padding: ' 10px 15px'}} >
              <p style={{fontWeight: '600', fontSize: '15px', color: '#323c47', margin: '0' }}>Unpaid Loan</p>
              <h1 style={{fontSize: '48px', color: '#323c47', margin: '0'}}>N65,157</h1>
              <p>Loan would be due by <b style={{color: '#E6CB0D', fontWeight: '700'}}>16 Jun 2019</b></p>
            </div>
            </div>

            {/* loan card 2 starts */}
            <div style={{background: '#fff', width: '491px', height: '131px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: '5px', marginRight: '60px'}}>
            <div style={{padding: ' 10px 15px'}}>
              <p style={{fontWeight: '600', fontSize: '15px', color: '#323c47', margin: '0 0 10px 0'}}>Apply for loan</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h1 style={{fontSize: '19px', color: '#323c47', margin: '0'}}>You are not qualified for <br/> another loan</h1>
              <Button
              style={{
                margin: '0 20px',
                width:'155px',
                height:'48px',
                color: '#fff',
                background: '#007EFF',
                borderRadius: '3px'
              }}
              >Apply for loan</Button>
              </div>
            </div>
            </div>
          </div>

        </Content>
      </Layout>
    </Layout>
  );
}
 
export default Loans;
