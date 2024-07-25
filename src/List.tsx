import React from "react";
import { useContext} from "react";
import { AccountingContext } from "./AccountingContext";
import { Link } from "react-router-dom";

export const List = () =>{
    const {accountingRecord,setAccountingRecord} = useContext(AccountingContext);

    const handleRemove = (index : number) => {
        const newRecordList = accountingRecord.filter((_, i) => i !== index);
        setAccountingRecord(newRecordList);
    };

    //計算總金額
    let totalMoney = 0
    for(let i=0;i<accountingRecord.length;i++){
        if (accountingRecord[i].type === "支出"){
            totalMoney -= Number(accountingRecord[i].money);
        }else{
            totalMoney += Number(accountingRecord[i].money);
        }  
    }

    return (
        <div className = "Account__list">
            {accountingRecord.map((record, index) => (
                <div key={index} className = "List">
                    {    //conditional Render
                        record.type === "支出" ?
                        <span className = "List__money" style = {{color : "green"}}>
                            -{record.money}
                        </span> :
                        <span className = "List__money" style = {{color : "red"}}>
                            {record.money}
                        </span>
                    }
                    <span className = "List__reason">
                        {record.reason}
                    </span>
                    <button 
                        onClick = {() => handleRemove(index)}
                        style = {{width : "80px", height : "30px", fontSize : "16px"}}
                    >刪除</button>
                </div>
            ))}
            <div className = "List__total">
                小計：{totalMoney}
            </div>
            <Link to = "/">
                <button 
                    style = {{
                        width : "80px", 
                        height : "30px", 
                        fontSize : "16px", 
                        margin : "30px auto"
                    }}
                >返回首頁</button>
            </Link>
        </div>
    );
} 