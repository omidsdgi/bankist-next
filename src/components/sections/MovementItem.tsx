import {formatMovementDate} from "@/utility/DateUtils";
import {formatCur} from "@/utility/AccountSummaryUtils";
import {MovementItemProps} from "@/types/Type";

const MovementItem = ({amount, date, locale, currency}:MovementItemProps) => {
    return (
        <li className='grid grid-cols-[3fr_4fr] px-8 py-4 border-b border-gray-100 even:bg-gray-300'>
            <div className='flex items-start gap-6'>
            <span
                className={`text-xs uppercase font-medium text-white px-4 py-1 rounded-full
             ${amount>0 ? "bg-gradient-to-tl from-emerald-500 to-lime-400 px-8" :"bg-gradient-to-tl from-rose-500 to-red-400 "} `}
            >
                {amount>0 ? 'deposit' : "withdrawal"}
            </span>
            <span className='text-xs uppercase font-medium text-gray-500'>{formatMovementDate(date)}</span>
            </div>
            <span className='text-lg ml-auto dark:text-black'>{formatCur(amount,locale, currency)}</span>
        </li>
    );
};

export default MovementItem;