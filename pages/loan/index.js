import React, {useState} from 'react';
import { Sidebar, Navbar } from "../../components";
import Filter from "../../components/svg/Filter";
import Cancel from "../../components/svg/Cancel";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { Layout, Button, Table, Modal, Card, Col, Row, List, Radio } from "antd";


const { Header, Content, Sider } = Layout;

const Loan = () => {
  const [modeState, setModeState] = useState("savings")

  const route = useRouter();

  const formatter = new Intl.NumberFormat('en-US');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: amount => <span>₦{formatter.format(Number(amount))}</span>
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
      render: (status, obj) => {
        const color = status === 'Paid' ? "#0378BF" : status === 'Not Paid' ? '#E60D0D' : "#E6CB0D";
        return (
        <span style={{ color }}>
          {status}
        </span>
      )},
    },
  ];

  const loanTypeColors = {
    "increase": "#1A8100",
    "deposit": "#0291E7",
    "withdraw": "#F72003"
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

  const dataSource = [
    {
      key: '1',
      date: '23 Apr, 2018',
      amount: '300000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '-',
      status: 'Not Paid'
    },
    {
      key: '2',
      date: '23 Apr, 2018',
      amount: '300000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '-',
      status: 'Pending acceptance'
    },
    {
      key: '3',
      date: '23 Apr, 2018',
      amount: '300000',
      description: 'A quick chat about Funsho’s health at school',
      datePaid: '30 Jun 2019',
      status: 'Paid'
    },
    {
      key: '3',
      date: '23 Apr, 2018',
      amount: '300000',
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
        <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{height:"100px", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Cancel />
        
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{margin: '10px 0'}}>You can apply for a loan after saving for at least 3-6months</p>
        </div>
      </Modal>
          <div className='cards-div' style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0 10px 0'}}>
            <div className='loan-card-1' style={{background: '#fff', width: '491px', height: '131px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: '5px'}}>
            <div style={{padding: ' 10px 15px'}} >
              <p className='loan-card-p-1' style={{fontWeight: '600', fontSize: '15px', color: '#323c47', margin: '0' }}>Unpaid Loan</p>
              <h1 className='loan-card-h1' style={{fontSize: '48px', color: '#323c47', margin: '0'}}>N65,157</h1>
              <p>Loan would be due by <b style={{color: '#E6CB0D', fontWeight: '700'}}>16 Jun 2019</b></p>
            </div>
            </div>

            {/* loan card 2 starts */} 
            <div className='loan-card-2' style={{background: '#fff', width: '491px', height: '131px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: '5px', marginRight: '60px'}}>
            <div style={{padding: ' 10px 15px'}}>
              <p className='loan-card-p' style={{fontWeight: '600', fontSize: '15px', color: '#323c47', margin: '0 0 10px 0'}}>Apply for loan</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
              <h1 className='loan-card-h1' style={{fontSize: '19px', color: '#323c47', margin: '0'}}>You are not qualified for <br/> another loan</h1>
                <Button
                className='loan-card-2-btn'
                style={{
                  margin: '0 20px',
                  width:'155px',
                  height:'48px',
                  color: '#fff',
                  background: '#007EFF',
                  borderRadius: '3px'
                }}
                onClick={showModal}
                >Apply for loan</Button>
              </div>
            </div>
            </div>
          </div>

          <div style={{marginTop: '30px', background: '#fff', width: '94.5%', height: '404px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)', borderRadius: '5px', }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px' }}>
            <p style={{fontWeight: '600', fontSize: '15px', color: '#323c47', }}>Loans history</p>
            <p style={{fontWeight: '600', fontSize: '14px', color: '#4B506D',}}><span style={{paddingRight: '12px'}}><Filter/></span>Filter</p>

            </div>
          <Table
            className="ant-table-thead desktop-only"
            columns={columns}
            dataSource={dataSource}
            pagination={{
              total: dataSource.length,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              defaultPageSize: 5,
              pageSize: 5,
              defaultCurrent: 1,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
          />
          <List className="savings-plan-list mobile-only"
                pagination={{
                  total: dataSource.length,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                  defaultPageSize: 5,
                  pageSize: 5,
                  defaultCurrent: 1,
                  pageSizeOptions: ["5", "10", "15", "20"],
                  size: "small"
                }}
                dataSource={dataSource}
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

        </Content>
      </Layout>
    </Layout>
  );
}
 
export default Loan;
