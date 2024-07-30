"use client";
import React, { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { AccountingContext, AccountingRecord } from '../context/AccountingContext';
import { useAuth } from '../lib/firebase.';
import { useRouter } from 'next/navigation';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [accountingRecord,setAccountingRecord] = useState<AccountingRecord[]>([]);

  return (
    <AccountingContext.Provider value = {{accountingRecord,setAccountingRecord}}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>React practice accounting</title>
        </head>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </AccountingContext.Provider>
  );
};

export default Layout;