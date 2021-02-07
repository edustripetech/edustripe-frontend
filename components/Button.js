import React from 'react';
import { Button } from "antd";

const ButtonContainer = ({children = "Submit", ...props}) => {
  return (
    <Button {...props}>{children}</Button>
  );
}
 
export default ButtonContainer;