import {CloseForm, LoanForm, TransferForm} from "@/components";

const OperationPanel = () => {
    return (
        <div className="grid gid-col-1 gap-4">
            <TransferForm/>
            <LoanForm/>
            <CloseForm/>
        </div>
    );
};

export default OperationPanel;