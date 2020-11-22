import React, { useState } from "react";
import { Drawer, Button, Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Notification } from "../svg"
import sidebarData from "../../utils/sidebarData";
import MenuList from "../MenuList";
import Link from "next/link";
import Image from 'next/image';

const NavBar = ({ menu, page="Dashboard" }) => {
  const [visible, setVisible] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-items-container">
        <div className="nav-items">
          <p>{page}</p>
          <div className="notification-icon">
            <Notification />
          </div>
        </div>
        <Button
          className="menu"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />

      </div>
      <Drawer
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
        className="tablet-and-mobile-only"
      >
        <div>
          <div className="drawer-logo">
            <Link href="/">
              <Image src="/images/Edustripelogo.png" alt="Edustripelogo" width="240" height="45" />
            </Link>
          </div>
          <div className="drawer-sidebar-image-container">
            <Avatar size={50}>
                A
            </Avatar>
            <div>
              <p className="avatar-username">Akindele Funmi</p>
              <p className="avatar-email">A.funmi@gmail.com</p>
            </div>
          </div>
        </div>
        <MenuList data={sidebarData} selectedMenu={menu} inlineIndent={0} />
      </Drawer>
    </nav>
  );
};

export default NavBar;
