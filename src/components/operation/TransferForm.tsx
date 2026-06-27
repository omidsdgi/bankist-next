import {IconButton, NumberInput, OperationCard, TextInput} from "@/components";
import React from "react";
import {getCurrentAccount} from "@/utility/accounts/GetCurrentAccount";
import {TransferFormData} from "@/types/Type";

const TransferForm = ({accounts,setAccounts,currentAccount,setCurrentAccount, receiverUsername, setReceiverUsername, transferAmount, setTransferAmount}:TransferFormData) => {

    const handlerTransfer=(e: React.SyntheticEvent ) => {
        e.preventDefault();
        const receiverAccount= getCurrentAccount(accounts, receiverUsername);


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