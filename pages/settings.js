import React from 'react';
import { Sidebar, Navbar } from "../components";
import { useRouter } from "next/router";
import { Layout } from 'antd';

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
          <h1>Settings page</h1>
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