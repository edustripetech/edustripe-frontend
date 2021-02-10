import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';

const SavingsTable = (props) => {
  return (
    
      <Table
        {...props}
      />
  
  );
}

export default SavingsTable;
