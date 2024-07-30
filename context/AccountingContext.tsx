"use client";
import React, { createContext } from "react";

//定義紀錄型別
export interface AccountingRecord{
    type : string;
    money : number;
    reason : string;
}

//定義context的型別
interface AccountingContextType{
    accountingRecord : AccountingRecord[];
    setAccountingRecord : React.Dispatch<React.SetStateAction<AccountingRecord[]>>;
}

//設定初始值
const defaultContext : AccountingContextType = {
    accountingRecord : [],
    setAccountingRecord : () => {}
}

export const AccountingContext = createContext<AccountingContextType>(defaultContext);
