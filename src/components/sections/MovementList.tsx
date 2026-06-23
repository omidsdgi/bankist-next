import MovementItem from "./MovementItem";
import {Account} from "@/types/Type";

interface MovementListProps {
    move: number[] | undefined
    account:Account
}

const MovementList=({move, account}: MovementListProps)=>{
    return (
        <section className="max-h-[500px] overflow-y-auto bg-white rounded-2xl shadow">
            <ul className='divide-y divide-gray-500'>
                {move?.map((movement, index) => {
                    return <MovementItem
                        key={index}
                        amount={movement}
                        index={index}
                        date={account.movementsDates[index]}
                        locale={account.locale}
                        currency={account.currency}
                    />
                })}
            </ul>
        </section>
    );
}
export default MovementList