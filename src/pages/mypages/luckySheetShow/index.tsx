
import React, { useState } from 'react';
import Luckysheet from '@/components/LuckySheet';
import { Button } from 'antd';
import { initData } from './const';

function LuckySheetShow() {

  const luckysheet = window.luckysheet;
  const [sheetData, setSheetData] = useState<any>(initData);

  const getData = () => {
    const data = JSON.parse(window.localStorage.getItem('sheetData'));
    setSheetData(data);
  };

  const saveData = () => {
    const data = luckysheet?.getAllSheets();
    window.localStorage.setItem('sheetData', JSON.stringify(data));
  };

  return (
    <div className="App">
      <Button onClick={saveData} style={{ zIndex: 1000 }}>保存数据</Button>
      <Button onClick={getData} style={{ zIndex: 1000 }}>获取初始数据</Button>
      <div style={{ height: '500px' }}></div>
      <header className="App-header">
        <Luckysheet sheetData={sheetData} />
      </header>
    </div>
  );
}

export default LuckySheetShow


