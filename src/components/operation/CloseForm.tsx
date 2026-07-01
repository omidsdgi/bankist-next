import {IconButton, OperationCard, TextInput} from "@/components";
import {useState} from "react";
import {CloseAccountProps} from "@/types/Type";

const CloseForm = ({currentAccount, accounts,setAccounts}:CloseAccountProps) => {
    const [closeUsername, setCloseUsername] = useState<string>("");
    const [closePine,setClosePin] = useState<string>("");
    return (
        <OperationCard title='close account' variant='close'>
            <form className='grid grid-cols-[2.5fr_2.5fr_1fr] gap-2 '>
                <TextInput
                    placeholder='User'
                    value={closeUsername}
                    onChange={(e) => setCloseUsername(e.target.value)}
                    className='bg-red-200/70'/>
                <TextInput type='password'
                           placeholder='PIN'
                           value={closePine}
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