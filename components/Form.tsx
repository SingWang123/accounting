"use client";
import React from "react";
import { useContext,useState } from "react";
import { AccountingContext } from "../context/AccountingContext";

export default function Form(){
    const {accountingRecord,setAccountingRecord} = useContext(AccountingContext);
    const [type,setType] = useState("收入");
    const [money,setMoney] = useState("");
    const [reason,setReason] = useState("");

    const handleAccounting = () => {
        if (money.trim() === "") {
            alert("請輸入金額");
            return;
        }
        setAccountingRecord(prevRecords => [
            ...prevRecords,
            {
                type: type,
                money: Number(money),
                reason: reason
            }
        ]);
    };

    const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setMoney(value);
        }
    };


    return(
        <div className = "form">
            <select 
                value = {type} 
                onChange = {(e) => setType(e.target.value)}
                className = "form__type">
                <option value = {"收入"}>收入</option>
                <option value = {"支出"}>支出</option>
            </select>
            <input 
                type = "number" 
                value = {money} 
                onChange = {handleMoneyChange}
                placeholder = "請輸入金額"
                className = "form__input"
            ></input>
            <input 
                value = {reason} 
                onChange = {(e) => setReason(e.target.value)}
                placeholder = "請輸入來源"
                className = "form__input"
            ></input>
            <button 
                onClick = {handleAccounting}
                style = {{width : "80px", height : "36px", fontSize : "16px"}}
            >新增紀錄</button>
        </div>
    )
}