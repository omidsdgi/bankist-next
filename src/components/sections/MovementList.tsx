import MovementItem from "./MovementItem";
import {Account} from "@/types/Type";

const MovementList=({account}: {account: Account })=>{
    return (
        <section className="bg-white rounded-2xl shadow">
            <ul className='divide-y divide-gray-500'>
                {account.movements.map((movement, index) => {
                    return <MovementItem
                        key={index}
                        amount={movement}
                        index={index}
                        date={account.movementsDates[index]}
                    />
                })}
            </ul>
        </section>
    );
}
export default MovementList