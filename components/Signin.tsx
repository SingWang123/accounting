"use client";
import React from "react";
import { useState } from "react";
import { signinOut, signinUser,useAuth } from "../lib/firebase.";
import Link from "next/link";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user,loading} = useAuth()
    
    const handleSignin = () => {
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

        signinUser(email,password)
            .then((user) => {
                alert("恭喜登入成功");
            })
            .catch((error) =>{
                alert("登入失敗，請確認帳號密碼是否正確");
            });
    };

    const handleSignout = () => {
        signinOut();
    };


    return(
        <>
            {
                !user ?
                //沒有登入
                <div className="index__content">
                    登入系統
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
                            value = {password} 
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = "請輸入密碼"
                            className = "form__input"
                        > 
                        </input>
                    </div>
                    <button 
                        onClick = {handleSignin}
                        style = {{width : "80px", height : "36px", fontSize : "16px"}}
                    >
                        登入
                    </button>
                </div>:
                //有登入
                <div className="index__content">
                    {user.email}，歡迎回來！
                    <div className="index__button_bg">
                        <Link href="/accounting">
                            <button style={{ width: "80px", height: "30px", fontSize: "16px" }}>點此開始</button>
                        </Link>
                        <button
                            onClick = {handleSignout} 
                            style={{ width: "80px", height: "30px", fontSize: "16px" }}
                        >
                            登出
                        </button>
                    </div>
                </div>
            }
        </>
    )
}