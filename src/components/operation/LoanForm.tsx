import {IconButton, NumberInput, OperationCard} from "@/components";
import React, {useState} from "react";
import {LoanFormData} from "@/types/Type";

const LoanForm = ({currentAccount,setAccounts}:LoanFormData) => {
    const [loan, setLoan] = useState<string>('')



    return (
        <OperationCard title='Request loan' variant='loan'>
            <form
                onSubmit={handleLoan}
                className='grid grid-cols-[2.5fr_1fr_2fr] gap-3'>
                <NumberInput
                    className='bg-lime-200/60' placeholder='Amount'
                    value={loan}
                    onChange={(e) => setLoan(e.target.value)}
                />
                <IconButton/>
            </form>
        </OperationCard>
    );
};

export default LoanForm;