import {IconButton, NumberInput, OperationCard, TextInput} from "@/components";
import React, {useState} from "react";
import {getCurrentAccount} from "@/utility/accounts/GetCurrentAccount";
import {TransferFormData} from "@/types/Type";


const TransferForm = ({
                          accounts,
                          setAccounts,
                          currentAccount,
                          balance
                      }: TransferFormData) => {
    const [receiverUsername, setReceiverUsername] = useState<string>("")
    const [transferAmount, setTransferAmount] = useState<string>("")

    const handlerTransfer=(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!currentAccount) return null

        const amount = Number(transferAmount);
        const receiverAccount = getCurrentAccount(accounts, receiverUsername);
        const today = new Date().toISOString();

        if(
            !receiverAccount ||
            receiverAccount.username === currentAccount.username ||
            amount <= 0 ||
            amount > balance
        ){
            return null
        }
            setAccounts(prev => prev.map(acc => {
                if (acc.username === currentAccount.username) {
                    return {
                        ...acc,
                        movements: [-amount, ...acc.movements ],
                        movementsDates: [today, ...acc.movementsDates ],
                    };
                }
                if (acc.username === receiverAccount.username) {
                    return {
                        ...acc,
                        movements: [ +amount, ...acc.movements],
                        movementsDates: [today, ...acc.movementsDates ],
                    };
                }
                return acc;
            }));

            setReceiverUsername('');
            setTransferAmount('');
        }
    return (
        <OperationCard title='transfer money' variant='transfer'>
            <form
                onSubmit={handlerTransfer}
                className='grid grid-cols-[2.5fr_2.5fr_1fr] gap-2'
            >
                <TextInput className='bg-yellow-300/60'
                           placeholder='User'
                           value={receiverUsername}
                           onChange={(e) => setReceiverUsername(e.target.value)}
                />
                <NumberInput className='bg-yellow-300/60'
                             placeholder='Amount'
                             value={transferAmount}
                             onChange={(e) => setTransferAmount(e.target.value)}
                />
                <IconButton />

                <label className='text-sm text-center'>Transfer to</label>
                <label className='text-sm text-center'>Amount</label>
            </form>
        </OperationCard>
    );
};

export default TransferForm;