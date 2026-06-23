import {formatCur} from "@/hook/UseAccountSummary";

interface MovementItemProps {
    index:number;
    amount:number
    date:string;
    locale:string;
    currency:string;
}

const MovementItem = ({amount, date, locale, currency}:MovementItemProps) => {
    return (
        <li className='flex items-center justify-between gap-4 px-8 py-4 border-b border-gray-100 even:bg-gray-300'>
            <span
                className={`text-xs uppercase font-medium text-white px-3 py-1 rounded-full
             ${amount>0 ? "bg-gradient-to-tl from-emerald-500 to-lime-400" :"bg-gradient-to-tl from-rose-500 to-red-400 "} `}
            >
                {amount>0 ? 'deposit' : "withdrawal"}
            </span>
            <span className='text-xs uppercase font-medium text-gray-500'>{date}</span>
            <span className='text-lg ml-auto dark:text-black'>{formatCur(amount,locale, currency)}</span>
        </li>
    );
};

export default MovementItem;