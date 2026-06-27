import {CloseForm, LoanForm, TransferForm} from "@/components";
import React from "react";
import {OperationProps} from "@/types/Type";

const OperationPanel = ({accounts,setAccounts, receiverUsername, setReceiverUsername, transferAmount, setTransferAmount  }:OperationProps) => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm
                accounts={accounts}
                setAccounts={setAccounts}
                receiverUsername={receiverUsername}
                setReceiverUsername={setReceiverUsername}
                transferAmount={transferAmount}
                setTransferAmount={setTransferAmount}/>
            <LoanForm/>
            <CloseForm/>
        </div>
    );
};

export default OperationPanel;