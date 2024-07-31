"use client";
import React from "react";
import { useState } from "react";
import { registerUser } from "../lib/firebase.";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignup = () => {
        if (email.trim() === "" || password.trim() === "") {
            alert("請輸入電子信箱和密碼");
            return;
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmail(email);
        } else {
            alert("請輸入正確的電子郵件格式");
            return 
        }

        if (password.length < 6){
            alert("密碼需大於6碼");
            return;
        }

        registerUser(email,password)
            .then((user) => {
                alert("恭喜註冊成功");
            })
            .catch((error) =>{
                alert("註冊失敗，請確認email是否已經註冊");
            });
    };

    return(
        <div className = "index__signup">
            註冊帳戶
            <div className = "signup__input">
                <label style = {{margin : "0px 5px"}}>
                    信箱
                </label>
                <input  
                    value = {email} 
                    onChange = {(e) => setEmail(e.target.value)}
                    placeholder = "請輸入電子信箱"
                    className = "form__input"
                >    
                </input>
            </div>
            <div className = "signup__input">
                <label style = {{margin : "0px 5px"}}>
                    密碼
                </label>
                <input 
                    type = "password"
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder = "請輸入密碼"
                    className = "form__input"
                > 
                </input>
            </div>
            <button 
                onClick = {handleSignup}
                style = {{width : "80px", height : "36px", fontSize : "16px", margin : "10px"}}
            >
                註冊
            </button>
        </div>
    )
}