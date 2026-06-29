import {Header, MovementList, OperationPanel, Summary,} from "@/components";
import Balance from "@/components/sections/Balance";
import {useState} from "react";
import {Account} from "@/types/Type";
import {initialAccounts} from "@/data/mockData";
import {createUsernames} from "@/utility/accounts/CreateUsernames";


export default function Home() {
    const [accounts, setAccounts] = useState<Account[]>(createUsernames(initialAccounts));
    const[currentUsername, setCurrentUsername]=useState<string |null>(null)
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const accountWithUsernames =accounts
    const currentAccount=accountWithUsernames.find(
        acc =>acc.username === currentUsername
    ) ?? null;

    const balance=currentAccount?.movements.reduce((acc,mov)=> acc + mov ,0) ?? 0

    return (
        <>
            <Header
                accounts={accountWithUsernames}
                currentAccount={currentAccount}
                setCurrentUsername={setCurrentUsername}
            />
            <main className= "max-w-5xl mx-auto mt-12 opacity-100 ">
                {currentAccount &&(
                    <>
                        <Balance account={currentAccount} balance={balance} />
                        <div className=' grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8'>
                            <MovementList isSorted={isSorted} account={currentAccount} />
                            <OperationPanel
                                accounts={accountWithUsernames}
                                setAccounts={setAccounts}
                                currentAccount={currentAccount}
                                balance={balance}
                          />
                        </div>
                        <Summary isSorted={isSorted} setIsSorted={setIsSorted}  account={currentAccount} />
                    </>
                )}
            </main>
        </>
    )
}
