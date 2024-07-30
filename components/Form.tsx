"use client";
import React from "react";
import { useState } from "react";
import { useAuth, writeUserData } from "../lib/firebase.";

export const Form = () =>{
    const [type,setType] = useState("收入");
    const [money,setMoney] = useState("");
    const [reason,setReason] = useState("");
    const {user,loading} = useAuth();

    const handleAccounting = () => {
        if (money.trim() === "") {
            alert("請輸入金額");
            return;
        }

        writeUserData(type, Number(money), reason ,user?.uid);
    };

    const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setMoney(value);
        }
    };


    return(
        <div className = "form">
            <div className = "form__user">您已經使用{user?.email}登入</div>
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
                placeholder = "請輸入說明"
                className = "form__input"
            ></input>
            <button 
                onClick = {handleAccounting}
                style = {{width : "80px", height : "36px", fontSize : "16px"}}
            >新增紀錄</button>
        </div>
    )
}