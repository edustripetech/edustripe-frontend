import React, {useEffect} from 'react'
import { Sidebar, Navbar, Button } from "../../components";
import { ArrowRightUp } from "../../components/svg";
import { useRouter } from "next/router";
import { Layout, Card, Row, Col, Typography } from 'antd';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const route = useRouter();

  const user = {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(localStorage.user_token) {
        user.firstname = localStorage.firstname
        user.lastname = localStorage.lastname
        user.email = localStorage.email
      }
    }
  }, [])

  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar menu={route.pathname} />  
      </Header>

      <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <h3>{`Welcome back ${typeof window !== "undefined" ? localStorage.lastname : ''}`}</h3>
          <Row gutter={[16,16]}>
              <Col xl={6} lg={10} md={12} xs={24}>
                <Card style={{ width: "100%", height: "232px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)' }}>
                  <h5 className="card-header"><strong>Savings Balance</strong></h5>
                  <Title level={3}>₦0.0</Title>
                  <p><span style={{
                    color: "#E6CB0D",
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "19.5px",
                    letterSpacing: "0.01em",

                  }}>15%</span><ArrowRightUp /> <span>by next month</span></p>
                  <Button style={{ borderColor: "#109CF1", color: "#109CF1"}}>Save money</Button>
                </Card>
              </Col>
              <Col xl={6} lg={10} md={12} xs={24}>
                <Card style={{ width: "100%", height: "232px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)' }}>
                  <h5 className="card-header"><strong>Loan Balance</strong></h5>
                  <p style={{
                    fontWeight: "500",
                    fontSize: "19px",
                    lineHeight: "28.5px",
                    letterSpacing: "0.01em",
                    marginBottom: "56px",
                    marginTop: "15px",
                  }}>You have no loan at the moment</p>
                  <Button style={{ borderColor: "#109CF1", color: "#109CF1"}}>Request for loan</Button>
                </Card>
              </Col>
          </Row>
          

          
        </Content>
      </Layout>
    </Layout>
  );
}
 
export default Dashboard;
