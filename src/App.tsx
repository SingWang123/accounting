import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Accounting from "./Accounting";
import { AccountingContext, AccountingRecord } from './AccountingContext';


function App(){
    const [accountingRecord,setAccountingRecord] = useState<AccountingRecord[]>([]);

    return(
        <BrowserRouter>
            <AccountingContext.Provider value = {{accountingRecord,setAccountingRecord}}>
           
                <Routes>
                    <Route path = "/" element = {<Welcome/>} />
                    <Route path = "/Accounting" element = {<Accounting/>} />
                </Routes>
                
            </AccountingContext.Provider>
        </BrowserRouter>
    )
}

export default App;
