import {IconButton, NumberInput, OperationCard, TextInput} from "@/components";

const TransferForm = () => {
    return (
        <OperationCard title='transfer money' variant='transfer'>
            <form className='grid grid-cols-[2.5fr_2.5fr_1fr] gap-2'>
                <TextInput className='bg-yellow-300/60' placeholder='User'/>
                <NumberInput className='bg-yellow-300/60' placeholder='Amount'/>
                <IconButton />

                <label className='text-sm text-center'>Transfer to</label>
                <label className='text-sm text-center'>Amount</label>
            </form>
        </OperationCard>
    );
};

export default TransferForm;