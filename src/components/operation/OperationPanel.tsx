import {CloseForm, LoanForm, TransferForm} from "@/components";
import React from "react";
import {OperationProps} from "@/types/Type";

const OperationPanel = ({accounts,setAccounts,currentAccount,balance}:OperationProps) => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm
                accounts={accounts}
                setAccounts={setAccounts}
                currentAccount={currentAccount}
                balance={balance}
               />
            <LoanForm currentAccount={currentAccount} setAccounts={setAccounts} />
            <CloseForm/>
        </div>
    );
};

export default OperationPanel;