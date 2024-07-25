import React from 'react';
import {Link} from "react-router-dom";

function Welcome() {
  return (
    <div className = "Welcome">
      <div className = 'Welcome__title'>
        React練習專案
      </div>
      <div className = "Welcome__content">
        歡迎光臨我的頁面
      </div>
      <div className = "Welcome__button_bg">
        <Link to = "/Accounting">
          <button style = {{width : "80px", height : "30px", fontSize : "16px"}}>點此開始</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;