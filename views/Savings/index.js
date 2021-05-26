import React, { useState } from "react";
import { Sidebar, Navbar, Table, Button } from "../../components";
import { useRouter } from "next/router";
import { Layout, Card, Col, Row, List, Radio, Modal, Form , Input, Select } from "antd";
import { Withdraw, LongRightArrow, LeftArrow, Copy, Failed } from "../../components/svg";

const { Header, Content, Sider } = Layout;

const Savings = () => {

  const [modeState, setModeState] = useState("savings");

  //modal
  const initialState = [false,false,false,false,false,false,false];
  const [modalState, setModalState] = useState(initialState);

  const activateModal = (num) => {
    const newState = Array.from(initialState);
    newState[num] = true;
    setModalState(newState);
  };

  const Reset = () => {
    setModalState(initialState);
  };

  //form

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  }

  //data
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
                    <Row>
                      <Col style={{ paddingRight: '10px' }}>
                        <p className="savings-info savings-info--header fw-600">Savings</p>
                        <p className="savings-info--amount fw-500">₦170,300</p>
                        <p className="savings-info savings-info--text">
                          You can now access{" "}
                          <span className="savings-info--text__amount">₦440,000</span>
                        </p>
                      </Col>
                      <Col className='withdraw-btn-container'>
                        <Button type='primary' icon={<Withdraw />} className='withdraw-btn fw-500' onClick={() => activateModal(4)} > 
                          Withdraw
                        </Button> 
                      </Col>
                    </Row>
                    
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
                        <Button type='primary' size='large' className='btn-save-money fw-500' onClick={() => activateModal(0)}>Save money</Button>
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
                      <Button className="newplan-btn" onClick={() => activateModal(7)}><span>New Plan</span>
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
      <Modal visible={modalState[0]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Top Up</h2> 
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
            <Form.Item label="Amount" tooltip="Required">
              <Input placeholder="1000" />
            </Form.Item>
            <Form.Item
              label="Savings plan"
              tooltip={{
                title: 'Required'
              }}
            >
              <Select>
                <Select.Option value="main">Main</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="continue-btn" icon={<LongRightArrow />} block onClick={() => activateModal(1)}>Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[1]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Top Up</h2> 
          <Form
            form={form}
            layout="vertical"
            >
            <p>Select Payment Method</p>
            <Form.Item>
              <Button type="primary" className="pay-btn" block onClick={() => activateModal(2)}>Add Card
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="pay-btn" block onClick={() => activateModal(2)}>Bank Transfer
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="text" className="pay-back-btn" icon={<LeftArrow />} onClick={() => activateModal(0)}>Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[2]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Top Up</h2> 
          <Form
            form={form}
            layout="vertical"
            >
            <Form.Item>
              <p className="m-0">
              Transfer exactly <strong>₦60,000</strong> into this account number via your internet/Mobile Banking platform
              </p>
            </Form.Item>
            <Form.Item>
              <div className="account-details">
                <div>
                  <h2>8323552681</h2>
                  <Copy />
                </div>
                <p>Providus Bank</p>
              </div>
            </Form.Item>
            <p className="text-center">Bank account expire in <strong>3:32</strong></p>
            <Form.Item>
              <Button type="primary" className="pay-btn" block onClick={() => activateModal(3)}>I have paid
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="text" className="pay-back-btn" icon={<LeftArrow />} onClick={() => activateModal(1)}>Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[3]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title"></h2> 
          <Form
            form={form}
            layout="vertical"
            >
            <Form.Item>
              <div className="text-center">
                <Failed />
              </div>
            </Form.Item>
              <p class="text-center title2-text">Transfer Failed</p>
            <p className="text-center">The bank transfer failed.</p>
            <Form.Item>
              <Button type="primary" className="pay-btn" block onClick={() => activateModal(2)}>Retry
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="text" className="pay-back-btn" icon={<LeftArrow />} onClick={() => activateModal(2)}>Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[4]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Withdraw Savings</h2> 
          <div>
            <p>For security reasons, please make sure the account you are withdrawing to belongs to you.</p>
          </div>
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
            <Form.Item label="Amount" tooltip="Required">
              <Input placeholder="1000" />
            </Form.Item>
            <Form.Item
              label="Bank Name"
              tooltip={{
                title: 'Required'
              }}
            >
              <Select>
                <Select.Option value="firstbank">First Bank Plc</Select.Option>
                <Select.Option value="accessbank">Access Bank Plc</Select.Option>
                <Select.Option value="providusbank">Providus Bank</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Account Number" tooltip="Required">
              <Input type="text" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="continue-btn" icon={<LongRightArrow />} block onClick={() => activateModal(5)}>Withdraw Now
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[5]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Confirm Details</h2> 
          <div>
            <p>You are about to withdraw <b>₦60,000</b> into the account below</p>
          </div>
          <Form
            form={form}
            layout="vertical"
            >
            <Form.Item>
              <div className="account-details">
                <div>
                  <p>Account holder name</p>
                </div>
                <h2>Akindele Funmi</h2>
              </div>
              <div className="account-details">
                <div>
                  <p>Account number</p>
                </div>
                <h2>8323552681</h2>
              </div>
              <div className="account-details">
                <div>
                  <p>Bank name</p>
                </div>
                <h2>Wema</h2>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="continue-btn" icon={<LongRightArrow />} block onClick={() => activateModal(6)}>Continue Withdrawal
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="text" className="pay-back-btn" icon={<LeftArrow />} onClick={() => activateModal(4)}>Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[6]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title"></h2> 
          <Form
            form={form}
            layout="vertical"
            >
            <Form.Item>
              <div className="text-center">
                <Failed />
              </div>
            </Form.Item>
              <p class="text-center title2-text">Withdrawal Failed</p>
            <p className="text-center">There was an error processing your request</p>
            <Form.Item>
              <Button type="primary" className="pay-btn" block onClick={() => activateModal(4)}>Retry
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="text" className="pay-back-btn" icon={<LeftArrow />} onClick={() => activateModal(5)}>Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal visible={modalState[7]} footer={null} width={420} onCancel={Reset}>
        <div className="modal-container">
          <h2 className="modal-title">Create new plan</h2> 
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
            <Form.Item label="Plan name" tooltip="Required">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="target Amount" tooltip="Required">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Target Date" tooltip="Required">
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Description" tooltip="Required">
              <Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} type="text" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="continue-btn" block onClick={Reset}>Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </Layout>
  );
};

export default Savings;
