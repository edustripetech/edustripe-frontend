import React, { useState } from "react";
import { Sidebar, Navbar, Table, Button } from "../../components";
import { useRouter } from "next/router";
import { Layout, Card, Col, Row, List, Radio } from "antd";




const { Header, Content, Sider } = Layout;

const Savings = () => {

  const [modeState, setModeState] = useState("savings")

  const route = useRouter();
  const formatter = new Intl.NumberFormat('en-US');
  const columns = [
  { title: 'Plan Name', dataIndex: 'name' },
  { title: 'Target', dataIndex: 'target', render: target => <span>₦{formatter.format(target)}</span> },
  { title: 'Date Due', dataIndex: 'date' },
  { title: 'Description', dataIndex: 'description' },
  { title: 'Amount Saved', dataIndex: 'amount',

  render: (amount, obj) => {
    const color = Number(amount) >= Number(obj.target) ? "#1A8100" : "#0378BF";
    return (
    <span style={{ color }}>
      ₦{formatter.format(amount)}
    </span>
  )}},
  { title: '', dataIndex: 'blank' },

];

const loanTypeColors = {
  "increase": "#1A8100",
  "deposit": "#0291E7",
  "withdraw": "#F72003"
}

const loanColumns = [
  { title: 'Date', dataIndex: 'date' },
  { title: 'Type', dataIndex: 'type',
    render: (type, obj) => {

      return (
      <span style={{ color: loanTypeColors[type.toLowerCase()], textTransform: "capitalize" }}>
        {type}
      </span>
  )}},
  { title: 'Description', dataIndex: 'description' },
  { title: 'Amount Saved', dataIndex: 'amount'},

  { title: '', dataIndex: 'blank' },

];

const data = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    target: '83000',
    date:'23, April 2020',
    description:'Second term school fees',
    amount: '50000',
    blank:''
  });
  data.push({
    key: i+10,
    name: `Jonas Brown ${i}`,
    target: '79000',
    date:'20, June 2020',
    description:'Second term school fees',
    amount: '100000',
    blank:''
  });
}

  const styleSelection = (itemKey, obj) => {
    if(itemKey === "target") {
      return { fontWeight: "600", color: "#334D6E"};
    }
    if(itemKey === "type") {
      return { fontWeight: "600", color: loanTypeColors[obj[itemKey].toLowerCase()]};
    }
    if(itemKey === "amount") {
      return Number(obj.amount) >= Number(obj.target) ? { fontWeight: "600", color: "#1A8100"} : { fontWeight: "600", color: "#0378BF"};
    }
    return {color: "#334D6E"}
  }

const loanData = [];
const types = ["increase", "deposit", "withdraw"];
for (let i = 0; i < 4; i++) {
  loanData.push({
    key: i,
    date:'23, April 2020',
    type: types[i%types.length],
    description:'Second term school fees',
    amount: '50000',
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
              <Row gutter={30} justify="space-between">
                <Col className="savings-card" sm={{ order: 0, span: 10 }} xs={{ order: 3, span: 24 }} span={10}>
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
                <Col className="savings-card-other" xs={{ span: 12 }} sm={{ span: 7 }}>
                  <Card bordered={false} style={{backgroundColor:'transparent'}} bodyStyle={{ display:'flex', justifyContent: "flex-end", paddingRight: 0}}>
                      <div className='mt-4'>
                        <p className='topup-text fw-600'>Top up</p>
                        <p className='add-money-text fw-500'>Add your money to your savings</p>
                      </div>      
                  </Card>
                </Col>
                <Col className="savings-card-other" xs={{ span: 7 }} sm={{ span: 7 }}>
                      <Card bordered={false} style={{backgroundColor:'transparent'}} bodyStyle={{ display:'flex', justifyContent: "flex-end"}}>
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

            <Radio.Group className="mobile-only" onChange={(e) => {setModeState(e.target.value)}} value={modeState} style={{ marginBottom: 24 }}>
              <Radio.Button value="savings">Savings Plan</Radio.Button>
              <Radio.Button value="loans">Loan History</Radio.Button>
            </Radio.Group>

            <div style={{ display: modeState === "savings" ? "block" : "none"}}>
              <Card className="card-container" style={{border:'none'}}>
                <div style={{display:'flex', alignItems: 'flex-end', flexWrap: "wrap"}}>
                      <h1 className='savings-info--header fw-500' style={{marginRight:'auto'}}>Savings Plan</h1>
                      <Button className="newplan-btn"><span>New Plan</span>
                      <img src="/images/svg/plus.svg" alt="+" />
                      </Button>
                  </div>
              </Card> 

              <Table columns={columns} className='ant-table-thead desktop-only' dataSource={data} pagination={{
                total: data.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                defaultPageSize: 5,
                pageSize: 5,
                defaultCurrent: 1,
                pageSizeOptions: ["5", "10", "15", "20"]
              }} />

              <List className="savings-plan-list mobile-only"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                  defaultPageSize: 5,
                  pageSize: 5,
                  defaultCurrent: 1,
                  pageSizeOptions: ["5", "10", "15", "20"],
                  size: "small"
                }}
                dataSource={data}
                renderItem={obj => 
                {
                  delete obj.key;
                  delete obj.blank;
                  const objKeys = Object.keys(obj);

                  return(
                    <List
                      size="small"
                      
                      className="list-container"
                      dataSource={objKeys}
                      renderItem={item => (
                        <List.Item>
                          <div className="list_item">
                            <span>{item}:</span>
                            <span style={styleSelection(item, obj)}>{item === "amount" || item === "target" ? `₦${formatter.format(obj[item])}` : obj[item]}</span>
                          </div>
                        </List.Item>
                      )}
                    />
                  )}
                }
              />
            </div>

            <div style={{ display: modeState === "loans" ? "block" : "none"}}>
              <Card style={{border:'none'}} className="card-container">
                <div style={{display:'flex'}}>
                      <h1 className='savings-info--header fw-500' style={{marginRight:'auto'}}>Loans History</h1>
                  </div>
              </Card> 

              <Table columns={loanColumns} className='ant-table-thead desktop-only' dataSource={loanData} pagination={{
                total: loanData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                defaultPageSize: 5,
                pageSize: 5,
                defaultCurrent: 1,
                pageSizeOptions: ["5", "10", "15", "20"]
              }} />

              <List className="savings-plan-list mobile-only"
                pagination={{
                  total: loanData.length,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                  defaultPageSize: 5,
                  pageSize: 5,
                  defaultCurrent: 1,
                  pageSizeOptions: ["5", "10", "15", "20"],
                  size: "small"
                }}
                dataSource={loanData}
                renderItem={obj => 
                {
                  delete obj.key;
                  delete obj.blank;
                  const objKeys = Object.keys(obj);

                  return(
                    <List
                      size="small"
                      
                      className="list-container"
                      dataSource={objKeys}
                      renderItem={item => (
                        <List.Item>
                          <div className="list_item">
                            <span>{item}:</span>
                            <span style={styleSelection(item, obj)}>{item === "amount" ? `₦${formatter.format(obj[item])}` : obj[item]}</span>
                          </div>
                        </List.Item>
                      )}
                    />
                  )}
                }
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Savings;
