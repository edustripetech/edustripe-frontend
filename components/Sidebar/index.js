import React, {useEffect} from 'react';
import router, { useRouter } from "next/router";
import sidebarData from "../../utils/sidebarData";
import { Layout, Space, Avatar, Typography } from "antd";
import MenuList from "../MenuList";
import Image from 'next/image';
import Link from "next/link";

const { Sider } = Layout;

const SideBar = ({ menu }) => {
const route = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      if(!localStorage.user_token) {
        route.push('/login');
      }
    }
  }, [])

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
          {`${typeof window !== "undefined" && localStorage.lastname ? localStorage.lastname[0].toUpperCase() : ''}`}
          </Avatar>
          <div>
            <p className="avatar-username">{`${typeof window !== "undefined" && localStorage.lastname ? localStorage.lastname.toUpperCase() : ''}`}</p>
            <p className="avatar-email">{`${typeof window !== "undefined" && localStorage.lastname ? localStorage.email : ''}`}</p>
          </div>
        </div>
      </div>
      <MenuList data={sidebarData} selectedMenu={menu} />
   </Sider>
   );
};
 
export default SideBar;