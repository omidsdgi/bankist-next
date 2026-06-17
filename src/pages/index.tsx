import {Header, MovementList, OperationPanel, Summary,} from "@/components";
import Balance from "@/components/sections/Balance";


export default function Home() {
    return (
        <>
            <Header/>
            <main className= "max-w-5xl mx-auto mt-12 opacity-100 ">
                <Balance/>
                <div className=' grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8'>
                <MovementList />
                <OperationPanel/>
                </div>
            </main>
            <Summary/>
        </>
    )
}
