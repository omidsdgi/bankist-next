import {Account} from "@/types/Type";

export const formatCur=  (value:number, locale: string, currency:string):string=>
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value)

interface AccountSummaryProps {
    totalIn:string
    totalOut:string
    interest:string
}

export const accountSummaryUtils = (account:Account):AccountSummaryProps => {
    const totalIn=formatCur(
        account.movements
            .filter((mov)=> mov>0)
            .reduce((acc, mov) => acc + mov,0),
        account.locale,
        account.currency
    )

    const totalOut=formatCur(
        account.movements
            .filter((mov) => mov < 0)
            .reduce((acc, mov) => acc + mov, 0),
        account.locale,
        account.currency
    )

    const interest=formatCur(
        account.movements
            .filter((mov)=> mov>0)
            .map((deposit) => (deposit *account.interestRate)/100)
            .filter((int)=> int> 1)
            .reduce((acc, int)=> acc + int, 0),
        account.locale,
        account.currency
    )

    return{totalIn,totalOut,interest}
}

