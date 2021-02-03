import React, {useState} from 'react';
import { Sidebar, Navbar } from "../../components";
import Filter from "../../components/svg/Filter";
import Cancel from "../../components/svg/Cancel";
import { useRouter } from "next/router";
import { Layout, Button, Table, Modal } from 'antd';

const { Header, Content, Sider } = Layout;

const List = () => {
  const route = useRouter();

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
        <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{height:"100px", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Cancel />
        
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{margin: '10px 0'}}>You can apply for a loan after saving for at least 3-6months</p>
        </div>
      </Modal>
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
            id=""
            columns={columns}
            dataSource={dataSource}
            // loading={this.state.loading}
            style={{ overflowX: 'auto', width:'1045px',  }}
          />
          </div>

        </Content>
      </Layout>
    </Layout>
  );
}
 
export default List;
