import {formatCur} from "@/utility/lib/AccountSummaryUtils";
import {BalanceProps} from "@/types/Type";
import {formatDateTime} from "@/utility/lib/DateUtils";


const Balance = ({account, balance}: BalanceProps)  => {

    return (
        <section className="flex items-end justify-between gap-4 ">
            <div className='flex flex-col'>
                <h2 className='text-2xl font-medium '>Current balance</h2>
                <p className='text-sm '>As of <span>{formatDateTime(account)}</span></p>
            </div>
            <p className='text-4xl sm:text-5xl font-normal'>{formatCur(balance, account.locale,account.currency )}</p>
        </section>
    );
};

export default Balance;