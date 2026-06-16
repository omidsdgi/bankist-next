import {accounts} from "@/data/mockData";
import MovementItem from "./MovementItem";

const MovementList=()=>{
    return (
        <section className="bg-white rounded-tl-xl shadow">
            <ul className='divide-y divide-gray-500'>
                {accounts.map((account, index) => {
                    return <MovementItem key={index} />
                })}
            </ul>
        </section>
    );
}
export default MovementList