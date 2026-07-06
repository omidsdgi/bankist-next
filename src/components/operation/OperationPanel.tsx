import {CloseForm, LoanForm, TransferForm} from "@/components";
import React from "react";
import {OperationProps} from "@/types/Type";

const OperationPanel = ({accounts,setAccounts,currentAccount,balance,restLogoutTimer}:OperationProps) => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm
                accounts={accounts}
                setAccounts={setAccounts}
                currentAccount={currentAccount}
                balance={balance}
                restLogoutTimer={restLogoutTimer}
               />
            <LoanForm
                currentAccount={currentAccount}
                setAccounts={setAccounts}
                restLogoutTimer={restLogoutTimer}
            />
            <CloseForm currentAccount={currentAccount} setAccounts={setAccounts} />
        </div>
    );
};

export default OperationPanel;