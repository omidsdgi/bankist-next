import MovementItem from "./MovementItem";
import { MovementListProps} from "@/types/Type";


const MovementList=({isSorted, account}: MovementListProps)=>{
    const transactions= account.movements.map((amount, index)=>({
        amount,
        date:account.movementsDates[index],
    }))
    const displayTransactions= isSorted
    ? [...transactions].sort((a,b) => b.amount - a.amount)
        : transactions
    return (
        <section className="max-h-[500px] overflow-y-auto bg-white rounded-2xl shadow">
            <ul className='divide-y divide-gray-500'>
                {displayTransactions?.map((transaction, index) => {
                    return <MovementItem
                        key={index}
                        amount={transaction.amount}
                        index={index}
                        date={transaction.date}
                        locale={account.locale}
                        currency={account.currency}
                    />
                })}
            </ul>
        </section>
    );
}
export default MovementList