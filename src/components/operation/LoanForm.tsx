import {IconButton, NumberInput, OperationCard} from "@/components";

const LoanForm = () => {
    return (
        <OperationCard title='Request loan' variant='loan'>
            <form className='grid grid-cols-[2.5fr_1fr_2fr] gap-3'>
                <NumberInput className='bg-lime-200/60' placeholder='Amount'/>
                <IconButton/>
            </form>
        </OperationCard>
    );
};

export default LoanForm;