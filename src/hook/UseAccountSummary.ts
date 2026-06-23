import {useMemo} from "react";
import {Account} from "@/types/Type";

const formatCur=  (value:number, locale: string, currency:string):string=>
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value)

interface AccountSummaryProps {
    totalIn:string
    totalOut:string
    interest:string
}

export const useAccountSummary = (account:Account):AccountSummaryProps => {
    const totalIn=useMemo(() => {
        const raw= account.movements
            .filter((mov)=> mov>0)
            .reduce((acc, mov) => acc + mov,0)
        return formatCur(raw, account.locale, account.currency)
    },[account.movements,account.locale, account.currency])

    const totalOut=useMemo(()=> {
        const raw = account.movements
            .filter((mov) => mov < 0)
            .reduce((acc, mov) => acc + mov, 0)
        return formatCur(Math.abs(raw), account.locale, account.currency)
    },[account.movements,account.locale, account.currency])

    const interest=useMemo(()=>{
        const raw= account.movements
            .filter((mov)=> mov>0)
            .map((deposit) => (deposit *account.interestRate)/100)
            .filter((int)=> int> 1)
            .reduce((acc, int)=> acc + int, 0)
        return formatCur(raw, account.locale, account.currency)
    },[account.movements,account.locale, account.currency, account.interestRate])

    return{totalIn,totalOut,interest}
}

