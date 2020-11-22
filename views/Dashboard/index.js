import React from 'react'
import { Sidebar, Navbar } from "../../components";
import { useRouter } from "next/router";
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const route = useRouter();

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar menu={route.pathname} />  
      </Header>

      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <h1>Dashboard page</h1>
        </Content>
      </Layout>
    </Layout>
  );
}
 
export default Dashboard;