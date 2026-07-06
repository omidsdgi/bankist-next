import {Header, MovementList, OperationPanel, Summary,} from "@/components";
import Balance from "@/components/sections/Balance";
import {useEffect, useState} from "react";
import {Account} from "@/types/Type";
import {initialAccounts} from "@/data/mockData";
import {createUsernames} from "@/utility/CreateUsernames";
import {getCurrentAccount} from "@/utility/GetCurrentAccount";
import {formatTimer} from "@/utility/formatTimer";


export default function Home() {
    const INITIAL_LOGOUT_TIME = 300
    const Fade_OUT_DURATION = 300;
    const [accounts, setAccounts] = useState<Account[]>(createUsernames(initialAccounts));
    const[currentUsername, setCurrentUsername]=useState<string |null>(null)
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [time, setTime] = useState(0);
    const [isVisible, setIsVisible] = useState<boolean>(false)


    const currentAccount= currentUsername
        ? getCurrentAccount(accounts, currentUsername) ?? null
        :null


    const balance=currentAccount?.movements.reduce((acc,mov)=> acc + mov ,0) ?? 0
    const showTime=formatTimer(time)

    const handleLoginSuccess=(username:string) => {
        setCurrentUsername(username)
        setIsVisible(true)
        setTime(INITIAL_LOGOUT_TIME)
    }
    const restLogoutTimer=()=>{
        setTime(INITIAL_LOGOUT_TIME)
    }
    useEffect(() => {
        if(!currentAccount) return

        const timer= setInterval(() => {
            setTime(prevTime =>{
                if (prevTime <= 0) {
                    clearInterval(timer)
                   setIsVisible(false)

                    setTimeout(()=>{
                        setCurrentUsername(null)
                    },Fade_OUT_DURATION)
                    
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)
        return ()=> clearInterval(timer)
    },[currentAccount])

    return (
        <>
            <Header
                accounts={accounts}
                currentAccount={currentAccount}
                onLoginSuccess={handleLoginSuccess}
            />
            <main className= {`max-w-5xl mx-auto mt-12 opacity-100 transition-all duration-1000
             ${isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0  scale-80'
            }
             `}>
                {currentAccount && (
                    <>
                        <Balance account={currentAccount} balance={balance} />
                        <div className=' grid grid-cols-1  sm:grid-cols-[4fr_3fr] gap-6 mt-8'>
                            <MovementList isSorted={isSorted} account={currentAccount} />
                            <OperationPanel
                                accounts={accounts}
                                setAccounts={setAccounts}
                                currentAccount={currentAccount}
                                balance={balance}
                                restLogoutTimer={restLogoutTimer}
                            />
                        </div>
                        <Summary isSorted={isSorted} setIsSorted={setIsSorted}  account={currentAccount} time={showTime}  />
                    </>
                )}
            </main>
        </>
    )
}
