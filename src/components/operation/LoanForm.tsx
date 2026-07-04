import {IconButton, NumberInput, OperationCard} from "@/components";
import React, {useState} from "react";
import {LoanFormData} from "@/types/Type";

const LoanForm = ({currentAccount,setAccounts}:LoanFormData) => {
    const [loan, setLoan] = useState<string>('')

    const handleLoan = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!currentAccount) return;

        const today = new Date().toISOString();
        const amount = Number(loan)

        if (amount > 0 && currentAccount.movements.some(mov => amount <= mov * 0.1)) {
            setTimeout(function() {
            setAccounts(prev => prev.map(acc => {
                if (acc.username === currentAccount.username) {
                    return {
                        ...acc,
                        movements: [amount, ...acc.movements],
                        movementsDates: [today, ...acc.movementsDates],
                    }
                }
                return acc;
            }))
            setLoan('')
        },3000)
        }
    }

    return (
        <OperationCard title='Request loan' variant='loan'>
            <form
                onSubmit={handleLoan}
                className='grid grid-cols-[2.5fr_1fr_2fr] gap-3'>
                <NumberInput
                    type="number"
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