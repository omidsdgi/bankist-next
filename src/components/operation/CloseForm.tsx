import {IconButton, OperationCard, TextInput} from "@/components";
import React, {useState} from "react";
import {CloseAccountProps} from "@/types/Type";

const CloseForm = ({currentAccount, setAccounts}:CloseAccountProps) => {
    const [closeUsername, setCloseUsername] = useState<string>("");
    const [closePin,setClosePin] = useState<string>("");


    const handleClose = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!currentAccount) return;
        if (closeUsername !== currentAccount.username ||
            Number(closePin) !== currentAccount.pin
        ) {
            return
        }
        setAccounts(prev=>
            prev.filter(account=>account.username !== currentAccount.username)
           )
        setClosePin('')
        setCloseUsername('')
    }
    return (
        <OperationCard title='close account' variant='close'>
            <form
                onSubmit={handleClose}
                className='grid grid-cols-[2.5fr_2.5fr_1fr] gap-2 '>
                <TextInput
                    type='text'
                    placeholder='User'
                    value={closeUsername}
                    onChange={(e) => setCloseUsername(e.target.value)}
                    className='bg-red-200/70'/>
                <TextInput type='password'
                           placeholder='PIN'
                           value={closePin}
                           onChange={(e) => setClosePin(e.target.value)}
                           className='bg-red-200/70'/>
                <IconButton type='submit'/>

                <label className='text-sm text-center'>Confirm user </label>
                <label className='text-sm text-center'>Confirm PIN</label>
            </form>
        </OperationCard>
    )
};

export default CloseForm;