import React from "react";
import { Sidebar, Navbar, Table } from "../../components";
import { useRouter } from "next/router";
import { Layout, Card, Col, Row, Button } from "antd";




const { Header, Content, Sider } = Layout;

const Savings = () => {

  const route = useRouter();
  const columns = [
  { title: 'Plan Name', dataIndex: 'name', width: 300 },
  { title: 'Target', dataIndex: 'target', width: 200 },
  { title: 'Date Due', dataIndex: 'date', width: 200 },
  { title: 'Description', dataIndex: 'description', width: 300 },
  { title: 'Amount Saved', dataIndex: 'amount', width: 200 },
  { title: '', dataIndex: 'blank', width: 200 },

];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    target: '83,000',
    date:'23, April 2020',
    description:'Second term school fees',
    amount: '50,000',
    blank:''
  });
}


  return (
    <Layout className="layout-wrapper">
      <Header className="dashboard-header">
        <Navbar menu={route.pathname} page="Savings" />
      </Header>

    <Layout>
        <Sidebar menu={route.pathname} />
        <Content>
          <div style={{ width: "100%"}}>
            <div className="site-card-wrapper">
              <Row gutter={30}>
                <Col span={12}>
                  <Card
                    bordered={false}
                    bodyStyle={{
                      borderRadius: "5px",
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <p className="savings-info savings-info--header fw-600">Savings</p>
                    <p className="savings-info--amount fw-500">₦170,000</p>
                    <p className="savings-info savings-info--text">
                      You can now access{" "}
                      <span className="savings-info--text__amount">₦440,000</span>
                    </p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card bordered={false} style={{backgroundColor:'transparent'}} bodyStyle={{ paddingLeft: 0, display:'flex'}}>
                      <div className='mt-4'>
                        <p className='topup-text fw-600'>Top up</p>
                        <p className='add-money-text fw-500'>Add your money to your savings</p>
                      </div>
                      <div className='mt-4'>
                        <p className='account-info fw-normal'>
                          <span className='account-info--text fw-600'>Acct No:</span> 227282992929
                        </p>
                        <Button type='primary' size='large' className='btn-save-money fw-500'>Save money</Button>
                      </div>
                  </Card>
                </Col>
              </Row>
            </div>

            <div>
            <Card style={{border:'none'}} bodyStyle={{paddingBottom:'0px'}}>
               <div style={{display:'flex'}}>
                    <h1 className='savings-info--header fw-500' style={{marginRight:'auto'}}>Savings Plan</h1>
                    <p>Icon</p>
                </div>
            </Card> 
            <Table columns={columns} className='ant-table-thead' dataSource={data}  scroll={{ x:'max-content', y: 400 }}/>
                {/* <Card bodyStyle={{display:'flex', flexDirection:'column', paddingRight:'0px', paddingLeft:'0px'}}>
                    <div style={{display:'flex'}}>
                    <h1 className='savings-info--header fw-500' style={{marginRight:'auto'}}>Savings Plan</h1>
                    <p>dddd</p>
                    </div>
                    <div style={{width: '100%'}}>
                        <Table />
                    </div>
                </Card> */}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Savings;
