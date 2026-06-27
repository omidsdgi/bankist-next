import {Header, MovementList, OperationPanel, Summary,} from "@/components";
import Balance from "@/components/sections/Balance";
import {useState} from "react";
import {Account} from "@/types/Type";
import {initialAccounts} from "@/data/mockData";


export default function Home() {
    const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
    const[currentAccount, setCurrentAccount]=useState<Account|null>(null)
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [receiverUsername, setReceiverUsername] = useState<string>("")
    const [transferAmount, setTransferAmount] = useState<string>("")
    const balance=currentAccount?.movements.reduce((acc,mov)=> acc + mov ,0) ?? 0

    const displayMovements= isSorted
        ? currentAccount?.movements.slice().sort((a,b)=>b-a)
        : currentAccount?.movements

    return (
        <>
            <Header accounts={accounts} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount}/>
            <main className= "max-w-5xl mx-auto mt-12 opacity-100 ">
                {currentAccount &&(
                    <>
                        <Balance account={currentAccount} balance={balance} />
                        <div className=' grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8'>
                            <MovementList move={displayMovements} account={currentAccount} />
                            <OperationPanel
                                accounts={accounts}
                                setAccounts={setAccounts}
                                currentAccount={currentAccount}
                                setCurrentAccount={setCurrentAccount}
                                receiverUsername={receiverUsername}
                                setReceiverUsername={setReceiverUsername}
                                transferAmount={transferAmount}
                                setTransferAmount={setTransferAmount}/>
                        </div>
                        <Summary isSorted={isSorted} setIsSorted={setIsSorted}  account={currentAccount} />
                    </>
                )}
            </main>
        </>
    )
}
