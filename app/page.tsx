import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className = "index">
      <div className = 'index__title'>
        React練習專案
      </div>
      <div className = "index__content">
        歡迎光臨我的頁面
      </div>
      <div className = "index__button_bg">
        <Link href = "/accounting">
          <button style = {{width : "80px", height : "30px", fontSize : "16px"}}>點此開始</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
