"use client";
import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { AccountingContext, AccountingRecord } from '../context/AccountingContext';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [accountingRecord,setAccountingRecord] = useState<AccountingRecord[]>([]);

  return (
    <AccountingContext.Provider value = {{accountingRecord,setAccountingRecord}}>
      <body>
        <main>{children}</main>
      </body>
    </AccountingContext.Provider>
  );
};

export default Layout;