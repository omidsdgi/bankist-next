import {CloseForm, LoanForm, TransferForm} from "@/components";
import React from "react";

interface OperationProps{
    receiverUsername:string,
    setReceiverUsername:React.Dispatch<React.SetStateAction<string>>,
    transferAmount:string,
    setTransferAmount:React.Dispatch<React.SetStateAction<string>>,
}

const OperationPanel = ({receiverUsername, setReceiverUsername, transferAmount, setTransferAmount  }:OperationProps) => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm
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