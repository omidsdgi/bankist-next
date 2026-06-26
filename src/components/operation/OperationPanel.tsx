import {CloseForm, LoanForm, TransferForm} from "@/components";
import React from "react";

interface OperationProps{
    receiverUsername:string,
    setReceiverUsername:React.Dispatch<React.SetStateAction<string>>,
    amount:string,
    setAmount:React.Dispatch<React.SetStateAction<string>>,
}

const OperationPanel = ({receiverUsername, setReceiverUsername, amount, setAmount  }:OperationProps) => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm receiverUsername={receiverUsername} setReceiverUsername={setReceiverUsername} amount={amount} setAmount={setAmount}/>
            <LoanForm/>
            <CloseForm/>
        </div>
    );
};

export default OperationPanel;