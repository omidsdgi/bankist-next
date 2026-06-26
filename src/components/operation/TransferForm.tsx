import {IconButton, NumberInput, OperationCard, TextInput} from "@/components";
import React from "react";
import {getCurrentAccount} from "@/utility/accounts/GetCurrentAccount";
import {accounts} from "@/data/mockData";

interface TransferFormData {
    receiverUsername: string;
    setReceiverUsername: React.Dispatch<React.SetStateAction<string>>;
    amount: string;
    setAmount: React.Dispatch<React.SetStateAction<string>>;
}

const TransferForm = ({receiverUsername, setReceiverUsername, amount, setAmount}:TransferFormData) => {

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
                             value={amount}
                             onChange={(e) => setAmount(e.target.value)}
                />
                <IconButton />

                <label className='text-sm text-center'>Transfer to</label>
                <label className='text-sm text-center'>Amount</label>
            </form>
        </OperationCard>
    );
};

export default TransferForm;