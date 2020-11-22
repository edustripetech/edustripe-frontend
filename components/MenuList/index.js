import React from 'react';
import { Menu, Divider } from "antd";
import { useRouter } from "next/router";
import Image from 'next/image';
import Line from "../Line";


const MenuTemplate = ({ data, selectedMenu, selectedKey, handleClick, inlineIndent = 24 }) => {
  const menuData = [];
  const router = useRouter();
  const Key = data.findIndex(({ link }) => link === selectedMenu);

  data.forEach(({name, link, Icon}, index) => {       
    if(name.toLowerCase() === "settings") {
      menuData.push(<Line key={"line"} />);
    } 

    menuData.push(
      <Menu.Item key={index} icon={<Icon />} onClick={() => {router.push(link)}}>
          {name}
      </Menu.Item>
    )     
    }
  );

  return (
    <Menu style={{ height: "100%", borderRight: 0 }} inlineIndent={inlineIndent} mode="inline" selectedKeys={[selectedKey || Key < 0 ? "0" : Key.toString()]}>
      {menuData}
    </Menu>
  );
}
export default MenuTemplate;