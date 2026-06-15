import {accounts} from "@/data/mockData";
import MovementItem from "./MovementItem";

const Movements=()=>{
    return (
        <section>
            <ul>
                {accounts.map((account, index,) => {
                    return <MovementItem account={account} key={index}/>
                })}
            </ul>
        </section>
    );
}
export default Movements