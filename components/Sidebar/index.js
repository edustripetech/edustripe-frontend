import React from 'react';
import sidebarData from "../../utils/sidebarData";
import { Layout, Space, Avatar, Typography } from "antd";
import MenuList from "../MenuList";
import Image from 'next/image';
import Link from "next/link";

const { Sider } = Layout;

const SideBar = ({ menu }) => {
  return (
    <Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
      width={250}
    >
      <div>
        <div className="logo">
          <Link href="/">
            <Image src="/images/Edustripelogo.png" alt="Edustripelogo" width="240" height="45" />
          </Link>
        </div>
        <div className="sidebar-image-container">
          <Avatar size={50}>
              A
          </Avatar>
          <div>
            <p className="avatar-username">Akindele Funmi</p>
            <p className="avatar-email">A.funmi@gmail.com</p>
          </div>
        </div>
      </div>
      <MenuList data={sidebarData} selectedMenu={menu} />
   </Sider>
   );
};
 
export default SideBar;