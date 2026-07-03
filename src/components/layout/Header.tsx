import Image from "next/image";
import React, {useState} from "react";
import {IconButton, ThemeToggle} from "@/components";
import { HeaderProps} from "@/types/Type";
import {getCurrentAccount} from "@/utility/GetCurrentAccount";


const Header = ({
                    accounts,
                    currentAccount,
                    setCurrentUsername
                }:HeaderProps) => {
    const [userName, setUserName]=useState<string>('')
    const [pin, setPin]=useState<string>("")

     const handleLogin=(e:React.SubmitEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const account= getCurrentAccount(accounts, userName)

        if (account && account.pin === Number(pin)){
            setCurrentUsername(account.username ?? null);
            setUserName('');
            setPin('')
        }
    }
    return (
        <header className="flex flex-col-2 gap-4 flex-wrap items-center justify-between md:flex-row  px-4  py-1">

            <h1 className='text-xl font-medium'>
                {currentAccount
                    ? `Welcome back, ${currentAccount.owner.split(" ")[0]}`
                    : "Log in to get started"}
            </h1>
            <Image src='/logo.png' alt="Bankist logo" width={52.5} height={52.5}/>
            <form
                className='grid grid-cols-[2fr_2fr_1fr] gap-4'
                onSubmit={handleLogin}
            >
                <input
                    type='text'
                    placeholder='user'
                    value={userName}
                    onChange={(e) =>setUserName(e.target.value) }
                    className='login--input '/>
                <input
                    type="password"
                    placeholder='PIN'
                    value={pin}
                    onChange={(e)=>setPin(e.target.value)}
                    maxLength={4}
                    className='login--input '/>
                <IconButton />
            </form>
            <ThemeToggle />
        </header>
    );
};

export default Header;
