import {Header, MovementList, OperationPanel, Summary,} from "@/components";
import Balance from "@/components/sections/Balance";
import {useState} from "react";
import {Account} from "@/types/Type";


export default function Home() {
    const[currentAccount, setCurrentAccount]=useState<Account|null>(null)
    return (
        <>
            <Header setCurrentAccount={setCurrentAccount}/>
            <main className= "max-w-5xl mx-auto mt-12 opacity-100 ">
                {currentAccount &&(
                    <>
                <Balance/>
                <div className=' grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8'>
                <MovementList />
                <OperationPanel/>
                </div>
            <Summary/>
                    </>
                    )}
            </main>
        </>
    )
}
